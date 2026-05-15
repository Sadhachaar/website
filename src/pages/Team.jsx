import { motion } from 'framer-motion';
import aboutBanner from '../assets/about_banner.png';

export default function Team() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-hidden bg-white">
        <div className="w-full h-auto">
          <motion.img 
            src={aboutBanner} 
            alt="Sadhachaar Team" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="premium-badge mb-6">Coming Soon</span>
            <h2 className="text-heading-2 mb-6">Our Team</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We are building a team of dedicated individuals who share our vision of creating a happier, more balanced world through Lok Vidya.
            </p>
            <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-lg border border-gold/20">
              <p className="text-charcoal font-medium">
                Launch Date: <span className="text-gold">15th Aug 2026, 11:59 PM</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}