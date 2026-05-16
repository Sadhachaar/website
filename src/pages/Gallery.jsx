import { motion } from 'framer-motion';
import aboutBanner from '../assets/about_banner.png';
import CountdownTimer from '../components/CountdownTimer';

export default function Gallery() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-hidden bg-white">
        <div className="w-full h-auto">
          <motion.img 
            src={aboutBanner} 
            alt="Sadhachaar Gallery" 
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
            <h2 className="text-heading-2 mb-4">A Journey Captured in Purpose</h2>
            <p className="text-gold font-semibold text-lg mb-6">Documenting 22 Years, 16 States, and Countless Transformations.</p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Every breakthrough has a face. Every piece of research has a story.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              This gallery will serve as a living archive of our journey since 2004. Soon, you will be able to explore visual narratives of our pilot team implementations, our deep dive into community livelihood metrics, and the moments of profound connection that define our work.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We are assembling a rich visual tapestry of our projects, field research, and milestone events to share with the world.
            </p>
            <div className="mt-8">
              <p className="text-charcoal font-medium mb-4">Launch Date: 15th Aug 2026, 11:59 PM</p>
              <CountdownTimer targetDate="August 15, 2026 23:59:00" />
            </div>
            <div className="mt-8 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gold/20">
              <p className="text-charcoal font-medium">
                The visual history of Sadhachaar is arriving shortly. Prepare to see transformation in action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}