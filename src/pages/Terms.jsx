import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative pt-32 pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="premium-badge mb-6">Legal</span>
            <h1 className="text-display-sm mb-8">
              Terms of <span className="text-gold italic">Service</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Please read our terms of service carefully before using our website and services.
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
              <h2 className="text-xl font-heading text-charcoal">1. Acceptance of Terms</h2>
              <p>By accessing and using the Sadhachaar website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">2. Use License</h2>
              <p>Permission is granted to temporarily use the Sadhachaar website for personal, non-commercial transitory viewing only.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">3. Intellectual Property</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Sadhachaar Foundation and is protected by applicable copyright laws.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">4. User Conduct</h2>
              <p>You agree not to use the website for any unlawful purpose or any purpose that could damage, disable, overburden, or impair the website.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">5. Limitation of Liability</h2>
              <p>Sadhachaar Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">6. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">7. Contact</h2>
              <p>If you have any questions about these Terms of Service, please contact us at info@sadhachaar.org.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}