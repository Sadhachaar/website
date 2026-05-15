import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PlanPreview() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const { plan, language } = location.state || {};

  const languageConfig = {
    en: { label: 'English', file: 'ENG-SADHACHAAR-7.pdf' },
    hi: { label: 'हिन्दी (Hindi)', file: 'HIN-SADHACHAAR-7.pdf' },
    te: { label: 'తెలుగు (Telugu)', file: 'TEL-SADHACHAAR-7.pdf' }
  };

  const config = languageConfig[language?.code] || languageConfig.en;
  const pdfUrl = `/${config.file}`;

const agreementMessages = {
    en: "You're about to begin a personalized journey aligned with the values of Satya (Being the Word) and Dharm (Authentic Role of Duty) through Mission Sadha and Sadhachaar. When you select your plan, we'll guide you to a quick form in our dedicated space—crafted just for you—so we can tailor your experience and set you on a meaningful path.",
    hi: "आप मिशन साधा और साधाचार के माध्यम से सत्य (शब्द का अस्तित्व) और धर्म (कर्तव्य की प्रामाणिक भूमिका) के मूल्यों के अनुरूप एक व्यक्तिगत यात्रा शुरू करने वाले हैं। जब आप अपनी योजना का चयन करेंगे, तो हम आपको हमारे विशेष स्थान पर एक त्वरित फॉर्म भरने के लिए निर्देशित करेंगे - जो विशेष रूप से आपके लिए बनाया गया है - ताकि हम आपके अनुभव को अनुकूलित कर सकें और आपको एक सार्थक मार्ग पर अग्रसर कर सकें।",
    te: "మిషన్ సాధ మరియు సాధాచార్ ద్వారా మీరు సత్యం (వాక్యంగా ఉండటం) మరియు ధర్మం (విధి యొక్క ప్రామాణిక పాత్ర) అనే విలువలకు అనుగుణంగా ఒక వ్యక్తిగత ప్రయాణాన్ని ప్రారంభించబోతున్నారు. మీరు మీ ప్రణాళికను ఎంచుకున్నప్పుడు, మీ కోసమే ప్రత్యేకంగా రూపొందించిన మా ప్రత్యేక ప్రదేశంలోని ఒక చిన్న ఫారమ్‌కు మేము మిమ్మల్ని మార్గనిర్దేశం చేస్తాము, తద్వారా మేము మీ అనుభవాన్ని తీర్చిదిద్ది, మిమ్మల్ని ఒక అర్థవంతమైన మార్గంలో నడిపించగలము."
  };

  const agreementLabels = {
    en: "I agree to proceed with this plan",
    hi: "मैं इस योजना के साथ आगे बढ़ने के लिए सहमत हूँ।",
    te: "ఈ ప్రణాళికతో ముందుకు సాగడానికి నేను అంగీకరిస్తున్నాను"
  };

  const message = agreementMessages[language?.code] || agreementMessages.en;
  const agreeLabel = agreementLabels[language?.code] || agreementLabels.en;

  useEffect(() => {
    if (!plan || !language) {
      navigate('/pricing');
    }
    setIsReady(true);
  }, [plan, language, navigate]);

  if (!isReady || !plan || !language) {
    return null;
  }

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors mb-6"
          >
            <span>←</span>
            <span className="text-sm font-medium">Back to Pricing</span>
          </Link>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-heading font-bold text-deepCharcoal">
                {plan.name} Plan
              </h1>
              <p className="text-muted mt-1">
                {plan.duration} • {plan.schedule}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-gold/10 text-gold-dark text-sm font-medium rounded-full">
                {language.flag} {config.label}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-subtle"
        >
          <div className="p-4 border-b border-subtle flex justify-between items-center bg-ivory/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-lg">📄</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-charcoal">{config.file}</h3>
                <p className="text-[10px] text-muted uppercase tracking-widest mt-1">
                  Program Details Preview
                </p>
              </div>
            </div>
            <a 
              href={pdfUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold transition-all duration-300"
            >
              Download PDF
            </a>
          </div>

          <div className="aspect-[16/10] w-full bg-gray-100">
            <iframe 
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Program PDF Preview"
              className="w-full h-full border-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl p-6 border border-subtle max-w-2xl mx-auto mb-6">
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              {message}
            </p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-gold/30 text-gold focus:ring-gold cursor-pointer"
              />
              <span className="text-sm font-medium text-charcoal">
                {agreeLabel}
              </span>
            </label>
          </div>

          <div className="flex justify-center">
            <a
              href={agreed ? "https://forms.gle/pyBuiRvMengcCeLy8" : "#"}
              onClick={(e) => {
                if (!agreed) {
                  e.preventDefault();
                  alert('Please agree to proceed');
                }
              }}
              target={agreed ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg inline-block ${
                agreed 
                  ? 'bg-gold text-white hover:bg-gold-dark hover:shadow-xl' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Proceed Plan
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}