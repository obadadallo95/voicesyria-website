"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";

interface Donor {
  hash: string;
  name: string;
  amount: number;
  currency: string;
  date: string;
}

interface DonationsData {
  recentDonors: Donor[];
  currentAmount: number;
  monthlyGoal: number;
}

export default function DonationsPage() {
  const { t } = useI18n();
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [donorName, setDonorName] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [motivationalMessageIndex, setMotivationalMessageIndex] = useState(0);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [donationsData, setDonationsData] = useState<DonationsData>({
    recentDonors: [],
    currentAmount: 0,
    monthlyGoal: 5000,
  });
  const [isLoadingDonations, setIsLoadingDonations] = useState(true);

  // عناوين المحافظ
  const walletAddresses: Record<string, string> = {
    bitcoin: 'bc1qxhj7wrrdeftdf9p5tcpwcnnc0kmnpstw0yapsc',
    ethereum: '0x5F0eE1E4D99fAe26F0CCa998bC80De9C2d7F6FDf',
    solana: '2FrsMxcTAWEH9Rj1GLNK633qPZgtQxxh5iWx5qrPtpxn',
  };

  // رسائل تحفيزية
  const motivationalMessages = {
    ar: [
      'كل دولار تتبرع به يساهم في بناء سوريا أفضل',
      'معاً نحو مستقبل أفضل لسوريا',
      'دعمك يصنع الفرق في حياة الملايين',
      'استثمر في مستقبل سوريا الحر',
      'كن جزءاً من التغيير الإيجابي',
    ],
    en: [
      'Every dollar you donate helps build a better Syria',
      'Together towards a better future for Syria',
      'Your support makes a difference in millions of lives',
      'Invest in Syria\'s free future',
      'Be part of the positive change',
    ],
    ku: [
      'Her dolar ku tu dide alîkariya avakirina Sûriyeyek baştir dike',
      'Bi hev re ber bi pêşerojeke baştir ji bo Sûriyê',
      'Piştgiriya te di jiyana mîlyonan de ferq dike',
      'Di pêşeroja azad a Sûriyê de veberhênan bike',
      'Beşek ji guheztina erênî be',
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMotivationalMessageIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // جلب بيانات التبرعات من API
    const fetchDonations = async () => {
      try {
        const response = await fetch('/api/donations');
        if (response.ok) {
          const data = await response.json();
          setDonationsData(data);
        }
      } catch (error) {
        console.error('Error fetching donations:', error);
      } finally {
        setIsLoadingDonations(false);
      }
    };

    fetchDonations();
  }, []);

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setSelectedAmount(null);
    setCustomAmount("");
    
    // نسخ عنوان المحفظة
    const address = walletAddresses[currency];
    if (address) {
      navigator.clipboard.writeText(address);
      setCopiedAddress(currency);
      setTimeout(() => setCopiedAddress(null), 2000);
    }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const amount = selectedAmount || parseFloat(customAmount) || 0;
      
      // إرسال التبرع إلى API
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donor_name: donorName,
          is_anonymous: isAnonymous,
          currency: selectedCurrency,
          declared_amount: amount,
          actual_amount: amount,
          transaction_hash: transactionHash || null,
        }),
      });

      if (response.ok) {
        // إعادة جلب بيانات التبرعات
        const donationsResponse = await fetch('/api/donations');
        if (donationsResponse.ok) {
          const data = await donationsResponse.json();
          setDonationsData(data);
        }
        
        // Reset form
        setSelectedCurrency(null);
        setSelectedAmount(null);
        setCustomAmount("");
        setIsAnonymous(true);
        setDonorName("");
        setTransactionHash("");
        
        alert('تم إرسال تبرعك بنجاح! شكراً لدعمك.\nYour donation has been submitted successfully! Thank you for your support.');
      } else {
        throw new Error('Failed to submit donation');
      }
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('حدث خطأ أثناء إرسال التبرع. يرجى المحاولة مرة أخرى.\nAn error occurred while submitting your donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentLanguage = () => {
    // This would normally come from the i18n context
    return 'ar';
  };

  const currentMotivationalMessage = motivationalMessages[getCurrentLanguage() as keyof typeof motivationalMessages]?.[motivationalMessageIndex] || motivationalMessages.ar[motivationalMessageIndex];

  const quickAmounts = [10, 25, 50, 100, 250, 500];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-20 mx-auto mb-6 animate-pulse">
              <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              التبرعات | Donations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              معاً نبني سوريا أفضل | Together Building a Better Syria
            </p>
          </div>
        </div>
      </section>

      {/* Donations Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Support Message Card */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 dark:bg-primary-light/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary dark:text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
                  دعم صوت سوريا | Support Syria Voice
                </h2>
                <div className="h-16 flex items-center justify-center">
                  <p key={motivationalMessageIndex} className="text-lg text-primary dark:text-primary-light font-semibold italic animate-fade-in-up">
                    {currentMotivationalMessage}
                  </p>
                </div>
              </div>
            </div>

            {/* Currency Selection */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                اختر العملة | Select Currency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Bitcoin */}
                <button
                  onClick={() => handleCurrencySelect('bitcoin')}
                  className={`card-modern dark:bg-gray-800 dark:border-gray-700 p-6 text-center transition-all duration-300 hover:scale-105 ${
                    selectedCurrency === 'bitcoin' ? 'bg-orange-500 text-white dark:bg-orange-600' : ''
                  }`}
                >
                  <div className="text-4xl font-bold mb-2">₿</div>
                  <div className="font-semibold">BITCOIN</div>
                  {copiedAddress === 'bitcoin' && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400">✓ تم النسخ | Copied</div>
                  )}
                </button>

                {/* Ethereum */}
                <button
                  onClick={() => handleCurrencySelect('ethereum')}
                  className={`card-modern dark:bg-gray-800 dark:border-gray-700 p-6 text-center transition-all duration-300 hover:scale-105 ${
                    selectedCurrency === 'ethereum' ? 'bg-purple-500 text-white dark:bg-purple-600' : ''
                  }`}
                >
                  <div className="text-3xl font-bold mb-2">ETH</div>
                  <div className="font-semibold">ETHEREUM</div>
                  {copiedAddress === 'ethereum' && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400">✓ تم النسخ | Copied</div>
                  )}
                </button>

                {/* Solana */}
                <button
                  onClick={() => handleCurrencySelect('solana')}
                  className={`card-modern dark:bg-gray-800 dark:border-gray-700 p-6 text-center transition-all duration-300 hover:scale-105 ${
                    selectedCurrency === 'solana' ? 'bg-green-500 text-white dark:bg-green-600' : ''
                  }`}
                >
                  <div className="text-3xl font-bold mb-2">SOL</div>
                  <div className="font-semibold">SOLANA</div>
                  {copiedAddress === 'solana' && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400">✓ تم النسخ | Copied</div>
                  )}
                </button>
              </div>
            </div>

            {/* Wallet Address Display */}
            {selectedCurrency && (
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
                  عنوان المحفظة | Wallet Address
                </h3>
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <code className="flex-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {walletAddresses[selectedCurrency]}
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(walletAddresses[selectedCurrency]);
                      setCopiedAddress(selectedCurrency);
                      setTimeout(() => setCopiedAddress(null), 2000);
                    }}
                    className="px-4 py-2 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg transition-colors flex-shrink-0"
                  >
                    {copiedAddress === selectedCurrency ? '✓' : 'نسخ | Copy'}
                  </button>
                </div>
              </div>
            )}

            {/* Amount Selection */}
            {selectedCurrency && (
              <>
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                    اختر المبلغ (USD) | Select Amount (USD)
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`card-modern dark:bg-gray-800 dark:border-gray-700 p-4 text-center transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount ? 'bg-primary text-white dark:bg-primary-light' : ''
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors">
                    مبلغ مخصص | Custom Amount
                  </label>
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    placeholder="أدخل المبلغ | Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                  />
                </div>
              </>
            )}

            {/* Donor Name Section */}
            {selectedCurrency && (selectedAmount || customAmount) && (
              <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                  اسم المتبرع | Donor Name
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsAnonymous(true)}
                      className={`flex-1 p-4 border-2 rounded-lg transition-all duration-300 ${
                        isAnonymous
                          ? 'border-primary bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      مجهول | Anonymous
                    </button>
                    <button
                      onClick={() => setIsAnonymous(false)}
                      className={`flex-1 p-4 border-2 rounded-lg transition-all duration-300 ${
                        !isAnonymous
                          ? 'border-primary bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      باسمي | With Name
                    </button>
                  </div>
                  {!isAnonymous && (
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="أدخل اسمك | Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Transaction Hash */}
            {selectedCurrency && (selectedAmount || customAmount) && (
              <div>
                <label htmlFor="transactionHash" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-colors">
                  رقم تأكيد المعاملة (اختياري) | Transaction Hash (Optional)
                </label>
                <input
                  type="text"
                  id="transactionHash"
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                  placeholder="أدخل رقم المعاملة | Enter transaction hash"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors font-mono text-sm"
                />
              </div>
            )}

            {/* Submit Button */}
            {selectedCurrency && (selectedAmount || customAmount) && (
              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري المعالجة... | Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      إرسال التبرع | Submit Donation
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Monthly Goal Section */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                الهدف الشهري | Monthly Goal
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">الهدف | Goal</span>
                  <span className="text-2xl font-bold text-primary dark:text-primary-light">
                    ${donationsData.monthlyGoal.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-primary dark:bg-primary-light h-4 rounded-full transition-all duration-500" 
                    style={{ 
                      width: `${Math.min((donationsData.currentAmount / donationsData.monthlyGoal) * 100, 100)}%` 
                    }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">تم جمع | Collected</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    ${donationsData.currentAmount.toLocaleString()} / ${donationsData.monthlyGoal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Transparency Section */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                الشفافية | Transparency
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                      استخدام التبرعات | Use of Donations
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• صيانة الخوادم والاستضافة | Server maintenance and hosting</li>
                      <li>• تطوير الميزات الجديدة | Developing new features</li>
                      <li>• تحسين الأمان والحماية | Improving security and protection</li>
                      <li>• دعم فريق التطوير | Supporting the development team</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                      الضمانات | Guarantees
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• جميع التبرعات طوعية | All donations are voluntary</li>
                      <li>• الشفافية الكاملة | Full transparency</li>
                      <li>• لا توجد رسوم خفية | No hidden fees</li>
                      <li>• 100% من التبرعات للخدمة | 100% of donations go to service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Donors */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                المتبرعون الأخيرون | Recent Donors
              </h2>
              <div className="overflow-x-auto">
                {isLoadingDonations ? (
                  <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                    جاري التحميل... | Loading...
                  </div>
                ) : donationsData.recentDonors.length === 0 ? (
                  <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                    لا يوجد تبرعات بعد | No donations yet
                  </div>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">المتبرع | Donor</th>
                        <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">المبلغ | Amount</th>
                        <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">التاريخ | Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donationsData.recentDonors.map((donor, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 px-4 text-gray-900 dark:text-white">
                            {donor.name === 'Anonymous' ? 'مجهول | Anonymous' : donor.name}
                          </td>
                          <td className="py-3 px-4 text-primary dark:text-primary-light font-semibold">
                            ${donor.amount.toLocaleString()}
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{donor.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* PayPal Donation */}
            <div className="card-modern dark:bg-gray-800 dark:border-gray-700 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
                التبرع عبر PayPal | Donate via PayPal
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                يمكنك أيضاً التبرع عبر PayPal بشكل آمن | You can also donate securely via PayPal
              </p>
              <a
                href="https://paypal.me/syriavoice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.203zm14.146-14.42a.925.925 0 0 0-.607-.513c-.027-.007-.054-.013-.08-.02-.547-.113-1.186-.157-1.885-.157h-5.18c-.2 0-.393.035-.569.103l-.62.25a.82.82 0 0 0-.453.46l-.07.178a.653.653 0 0 0 .003.52l.06.15c.09.204.246.372.435.478l.615.283a2.022 2.022 0 0 0 .69.12h3.5c.78 0 1.46.5 1.71 1.24l.04.12c.22.66.16 1.37-.17 1.98-.32.6-.84 1.05-1.48 1.28-.62.22-1.3.25-1.98.08h-.74a.614.614 0 0 0-.57.38l-.04.12c-.08.24-.1.5-.05.75.06.26.2.5.38.68l.05.05c.2.18.45.29.71.33h.74c1.16.17 2.34.1 3.45-.2 1.06-.3 1.95-.86 2.6-1.6.63-.7 1-1.58 1.07-2.52.07-.95-.14-1.9-.6-2.7-.45-.78-1.15-1.4-2.01-1.78z"/>
                </svg>
                التبرع عبر PayPal | Donate via PayPal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

