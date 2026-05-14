import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PlanPreview() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  const { plan, language } = location.state || {};

  const languageConfig = {
    en: { label: 'English', file: 'ENG-SADHACHAAR-7.pdf' },
    hi: { label: 'हिन्दी (Hindi)', file: 'HIN-SADHACHAAR-7.pdf' },
    te: { label: 'తెలుగు (Telugu)', file: 'TEL-SADHACHAAR-7.pdf' }
  };

  const config = languageConfig[language?.code] || languageConfig.en;
  const pdfUrl = `/${config.file}`;

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
          className="mt-8 flex justify-center"
        >
          <a
            href="https://forms.gle/pyBuiRvMengcCeLy8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold text-white text-lg font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Proceed Plan
          </a>
        </motion.div>
      </div>
    </div>
  );
}