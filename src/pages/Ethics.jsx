import { motion } from 'framer-motion';

export default function Ethics() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative pt-32 pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="premium-badge mb-6">Our Commitment</span>
            <h1 className="text-display-sm mb-8">
              Code of <span className="text-gold italic">Ethics</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Guiding principles that define our commitment to integrity, respect, and service.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.05),_transparent_70%)]" />
      </section>

      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg text-muted space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">1. Integrity</h2>
              <p>We are committed to honesty, transparency, and ethical conduct in all our interactions. We uphold the highest standards of integrity in our programs and communications.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">2. Respect</h2>
              <p>We treat all individuals with dignity and respect, regardless of background, beliefs, or status. We foster an inclusive environment that celebrates diversity.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">3. Compassion</h2>
              <p>Our approach is rooted in compassion and empathy. We seek to understand before being understood and offer support without judgment.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">4. Service</h2>
              <p>We are dedicated to serving our community with humility and dedication. We prioritize the well-being of others over personal gain.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">5. Continuous Growth</h2>
              <p>We commit to ongoing learning and self-improvement. We embrace feedback as an opportunity for growth and remain open to new perspectives.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">6. Community Welfare</h2>
              <p>We act in the best interest of our community and society. Our decisions consider the long-term impact on future generations and the environment.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}