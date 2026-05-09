import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Privacy <span className="text-gold italic">Policy</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
              <h2 className="text-xl font-heading text-charcoal">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including name, email, phone number, and any messages you send through our contact forms.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">2. How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide our services, send you relevant updates about Sadhachaar programs, and improve user experience.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share information with trusted service providers who assist us in operating our website.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at info@sadhachaar.org for any privacy-related concerns.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-heading text-charcoal">6. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}