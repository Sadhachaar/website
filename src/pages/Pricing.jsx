import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data';

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-softWhite section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deepBlue mb-4">
              Pricing Plans
            </h1>
            <p className="text-lightGray text-lg">
              Invest in your transformation journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card relative ${plan.highlight ? 'ring-2 ring-saffron scale-105' : ''}`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-saffron text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-heading font-semibold text-deepBlue text-xl mb-2">{plan.name}</h3>
                  <div className="text-4xl font-heading font-bold text-saffron">{plan.price}</div>
                  <div className="text-lightGray text-sm">{plan.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  plan.highlight
                    ? 'bg-saffron text-white hover:bg-gold'
                    : 'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Badge Info */}
      <section className="section-padding bg-softWhite">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="text-5xl mb-4">🏆</div>
            <h2 className="text-2xl font-heading font-semibold text-deepBlue mb-4">
              Certification & Loyalty Badge
            </h2>
            <p className="text-lightGray max-w-2xl mx-auto leading-relaxed">
              Upon completing the 42-hour foundational program, you will receive an official Sadhachaar certification and a digital loyalty badge. This recognized credential signifies your commitment to principled living and societal transformation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}