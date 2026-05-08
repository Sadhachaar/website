import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Journey() {
  const { t } = useTranslation();
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="premium-badge mb-6">Our Documented Path</span>
            <h1 className="text-display-sm mb-8">The Sadhachaar <span className="text-gold italic">Journey</span></h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Explore our transformation narrative through our comprehensive journey document.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.05),_transparent_70%)]" />
      </section>

      {/* PDF Preview Section */}
      <section className="section-padding bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Decorative background for preview */}
            <div className="absolute -inset-4 bg-gold/5 rounded-[48px] blur-2xl group-hover:bg-gold/10 transition-all duration-700" />
            
            <div className="relative bg-white border border-black/5 rounded-[40px] overflow-hidden shadow-2xl">
              {/* Toolbar-like header for preview */}
              <div className="p-6 border-b border-black/5 flex justify-between items-center bg-ivory/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <span className="text-gold text-lg">📄</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal leading-none">our_journey.pdf</h3>
                    <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Foundation to Future</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPDF(true)}
                  className="px-6 py-2 bg-charcoal text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gold transition-all duration-300 shadow-lg"
                >
                  Expand Full Screen
                </button>
              </div>

              {/* Embedded PDF Preview */}
              <div className="aspect-[16/10] w-full bg-gray-100 relative group/preview">
                <iframe 
                  src="/our_journey.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                  title="Journey PDF Preview"
                  className="w-full h-full border-none opacity-90 group-hover/preview:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            {/* Caption/Description */}
            <div className="mt-12 text-center">
              <p className="text-muted leading-relaxed max-w-2xl mx-auto">
                This document details our 20-year evolution, from early behavioral research to the global implementation of the Human Operating System.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof of Concept / Call to Action */}
      <section className="section-padding bg-charcoal text-white relative">
        <div className="absolute inset-0 bg-deepNavy/90" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-2 text-white mb-8">Ready to Start Your Journey?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Now that you've seen our path, it's time to chart yours. Join the thousands who have reset their lives with Sadhachaar.
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn-primary">Join the Movement</button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen PDF Modal */}
      <AnimatePresence>
        {showPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10"
          >
            <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setShowPDF(false)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-7xl h-full bg-white md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b flex justify-between items-center bg-ivory">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-xl">📄</div>
                  <h3 className="font-heading font-bold text-charcoal">The Sadhachaar Journey</h3>
                </div>
                <button 
                  onClick={() => setShowPDF(false)}
                  className="w-12 h-12 rounded-full bg-black/5 hover:bg-gold hover:text-white flex items-center justify-center transition-all duration-300 font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 bg-gray-100">
                <iframe 
                  src="/our_journey.pdf" 
                  title="Our Journey Full View"
                  className="w-full h-full border-none"
                />
              </div>
              <div className="p-4 text-center text-[8px] uppercase tracking-[0.3em] text-muted font-bold bg-ivory">
                © {new Date().getFullYear()} SADHACHAAR HUMAN OPERATING SYSTEM • FOUNDATION TO FUTURE
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}