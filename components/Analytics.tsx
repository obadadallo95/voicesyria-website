'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Generate or get session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  
  let sessionId = sessionStorage.getItem('analytics_session_id')
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('analytics_session_id', sessionId)
  }
  return sessionId
}

// Detect device type
function getDeviceType(): string {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// Parse user agent
function parseUserAgent(userAgent: string) {
  let browser = 'unknown'
  let os = 'unknown'

  // Browser detection
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    browser = 'Chrome'
  } else if (userAgent.includes('Firefox')) {
    browser = 'Firefox'
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browser = 'Safari'
  } else if (userAgent.includes('Edg')) {
    browser = 'Edge'
  } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
    browser = 'Opera'
  }

  // OS detection
  if (userAgent.includes('Windows')) {
    os = 'Windows'
  } else if (userAgent.includes('Mac OS X') || userAgent.includes('Macintosh')) {
    os = 'macOS'
  } else if (userAgent.includes('Linux')) {
    os = 'Linux'
  } else if (userAgent.includes('Android')) {
    os = 'Android'
  } else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    os = 'iOS'
  }

  return { browser, os }
}

// Get IP and location (using a free service)
async function getLocation(): Promise<{ country: string | null; city: string | null; ip: string | null }> {
  try {
    const response = await fetch('https://ipapi.co/json/', { 
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    })
    const data = await response.json()
    return {
      country: data.country_name || null,
      city: data.city || null,
      ip: data.ip || null,
    }
  } catch (error) {
    console.error('Error getting location:', error)
    return { country: null, city: null, ip: null }
  }
}

// Track page visit
async function trackVisit(pathname: string) {
  if (typeof window === 'undefined') return

  try {
    const sessionId = getSessionId()
    const deviceType = getDeviceType()
    const { browser, os } = parseUserAgent(navigator.userAgent)
    const location = await getLocation()

    const pageTitle = document.title
    const referrer = document.referrer || null
    const language = navigator.language || 'ar'
    const screenWidth = window.screen.width
    const screenHeight = window.screen.height

    const response = await fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        pagePath: pathname,
        pageTitle,
        referrer,
        userAgent: navigator.userAgent,
        ipAddress: location.ip,
        country: location.country,
        city: location.city,
        deviceType,
        browser,
        os,
        language,
        screenWidth,
        screenHeight,
      }),
    })

    if (!response.ok) {
      console.error('Failed to track visit')
    }
  } catch (error) {
    console.error('Error tracking visit:', error)
  }
}

// Track session duration
async function trackSessionDuration() {
  if (typeof window === 'undefined') return

  const sessionId = getSessionId()
  const startTime = Date.now()
  let isBounce = true
  let pageViews = 1

  // Track page views
  const originalPushState = history.pushState
  history.pushState = function(...args) {
    originalPushState.apply(history, args)
    pageViews++
    isBounce = false
  }

  // Track scroll (indicates engagement)
  let hasScrolled = false
  const scrollHandler = () => {
    if (!hasScrolled) {
      hasScrolled = true
      isBounce = false
    }
  }
  window.addEventListener('scroll', scrollHandler, { once: true })

  // Track clicks (indicates engagement)
  let hasClicked = false
  const clickHandler = () => {
    if (!hasClicked) {
      hasClicked = true
      isBounce = false
    }
  }
  window.addEventListener('click', clickHandler, { once: true })

  // Send session update before page unload
  const sendSessionUpdate = async () => {
    const duration = Math.floor((Date.now() - startTime) / 1000) // in seconds

    try {
      await fetch('/api/analytics/session', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          duration,
          isBounce: isBounce && pageViews === 1,
        }),
      })
    } catch (error) {
      console.error('Error updating session:', error)
    }
  }

  // Send update on page unload
  window.addEventListener('beforeunload', () => {
    // Use sendBeacon for reliability
    const duration = Math.floor((Date.now() - startTime) / 1000)
    const blob = new Blob([JSON.stringify({
      sessionId,
      duration,
      isBounce: isBounce && pageViews === 1,
    })], { type: 'application/json' })
    
    navigator.sendBeacon('/api/analytics/session', blob)
  })

  // Also send periodic updates (every 30 seconds)
  const interval = setInterval(() => {
    const duration = Math.floor((Date.now() - startTime) / 1000)
    fetch('/api/analytics/session', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        duration,
        isBounce: false, // If still on page after 30s, not a bounce
      }),
    }).catch(() => {}) // Silent fail
  }, 30000)

  // Cleanup
  return () => {
    clearInterval(interval)
    window.removeEventListener('scroll', scrollHandler)
    window.removeEventListener('click', clickHandler)
  }
}

// Track errors
function trackErrors() {
  if (typeof window === 'undefined') return

  const sessionId = getSessionId()

  // Track JavaScript errors
  window.addEventListener('error', (event) => {
    const { browser, os } = parseUserAgent(navigator.userAgent)

    fetch('/api/analytics/error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        pagePath: window.location.pathname,
        errorType: 'javascript',
        errorMessage: event.message,
        errorStack: event.error?.stack || null,
        userAgent: navigator.userAgent,
        browser,
        os,
      }),
    }).catch(() => {}) // Silent fail
  })

  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const { browser, os } = parseUserAgent(navigator.userAgent)

    fetch('/api/analytics/error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        pagePath: window.location.pathname,
        errorType: 'javascript',
        errorMessage: event.reason?.message || String(event.reason),
        errorStack: event.reason?.stack || null,
        userAgent: navigator.userAgent,
        browser,
        os,
      }),
    }).catch(() => {}) // Silent fail
  })
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track initial page visit
    trackVisit(pathname)

    // Track session duration
    const cleanup = trackSessionDuration()

    // Track errors
    trackErrors()

    return cleanup
  }, [pathname])

  return null // This component doesn't render anything
}

