import { motion } from 'framer-motion';
import aboutBanner from '../assets/about_banner.png';
import CountdownTimer from '../components/CountdownTimer';

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
            <h2 className="text-heading-2 mb-4">The Architects of Sadhachaar</h2>
            <p className="text-gold font-semibold text-lg mb-6">22 Years of Heart, Science, and Shared Purpose.</p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Behind Mission Sadha is a collective of researchers, leaders, and cultural strategists who have spent over two decades mapping the landscape of human happiness. From understanding the core of organizational maturity to designing transformative pre-marriage initiatives like The Golden Union, our team has been the driving force of this movement since 2004.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We are currently curating this space to introduce you to the brilliant minds, the steady hands, and the compassionate hearts leading India toward a happier, more harmonious tomorrow.
            </p>
            <div className="mt-8">
              <p className="text-charcoal font-medium mb-4">Launch Date: 15th Aug 2026, 11:59 PM</p>
              <CountdownTimer targetDate="August 15, 2026 23:59:00" />
            </div>
            <div className="mt-8 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gold/20">
              <p className="text-charcoal font-medium">
                Full team profiles and stories dropping soon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}