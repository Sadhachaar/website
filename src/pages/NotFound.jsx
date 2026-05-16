import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutBanner from '../assets/about_banner.png';

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative overflow-hidden bg-white">
        <div className="w-full h-auto">
          <motion.img 
            src={aboutBanner} 
            alt="Sadhachaar" 
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
            <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
            <h2 className="text-heading-2 mb-4">Page Not Found</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="inline-block px-8 py-4 bg-gold text-charcoal font-medium rounded-xl hover:bg-gold-dark transition-all"
            >
              Go to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}