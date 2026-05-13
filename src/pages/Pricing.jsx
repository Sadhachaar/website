import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Pricing() {
  const { t } = useTranslation();

  const programCoverage = [
    {
      title: 'SATYA',
      subtitle: 'Being your Word',
      duration: '12 Hours',
      topics: [
        'Vision of Satya',
        'Source of Satya',
        'Elements of Satya',
        'Medium of Satya',
        'Past / Present / Future',
        'Fear / Lack of Trust / Half Knowledge',
        'Kaam / Krodh / Lobh / Moh / Madh / Matsar'
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      title: 'DHARM',
      subtitle: 'Authentic Role of Duty',
      duration: '12 Hours',
      topics: [
        'Vision of Dharm',
        'Source of Dharm',
        'Elements of Dharm',
        'Medium of Dharm',
        'Past / Present / Future',
        'Fear / Lack of Trust / Half Knowledge',
        'Kaam / Krodh / Lobh / Moh / Madh / Matsar'
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10 10H22M10 16H22M10 22H22" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: 'RESET',
      subtitle: 'Personal Transformation',
      duration: '12 Hours',
      topics: [
        'Realize Potential',
        'Engage Skill',
        'Serve (Care & Inspire)',
        'Evolve',
        'Transform',
        'Cost / Time / Quality',
        'Sampoorn (Completeness)'
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 4V28M4 16H28" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      title: 'SADHACHAAR',
      subtitle: 'Satya / Dharm Enabled',
      duration: '6 Hours',
      description: 'Integrated practical application of Satya and Dharm principles.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M16 8V24M8 16H24" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  const feeStructure = [
    {
      region: 'India / Bharat',
      applicationFee: '₹1,116',
      admissionFee: '₹4,000',
      securityDeposit: '₹5,116',
      tuitionFee: 'Included in Plan',
      badge: null,
      decorative: '🪷'
    },
    {
      region: 'International',
      applicationFee: '₹1,470',
      admissionFee: '₹9,200',
      securityDeposit: '₹10,670',
      tuitionFee: '₹1,02,126',
      badge: 'Most Popular',
      decorative: '🌐'
    }
  ];

  const learningPlans = [
    {
      name: 'PRITHVI',
      duration: '1 Year',
      schedule: '4+ hrs / month',
      monthlyCost: '₹10,232',
      totalCost: '₹1,23,466',
      tax: '+ tax',
      icon: '🌍'
    },
    {
      name: 'JAL',
      duration: '6 Months',
      schedule: '8+ hrs / month',
      monthlyCost: '₹15,348',
      totalCost: '₹1,23,466',
      tax: '+ tax',
      icon: '💧'
    },
    {
      name: 'VAAYU',
      duration: '3 Months',
      schedule: '12+ hrs / month',
      monthlyCost: '₹20,464',
      totalCost: '₹1,24,936',
      tax: '+ tax',
      icon: '💨'
    },
    {
      name: 'AKAASH',
      duration: '1 Month',
      schedule: '12+ hrs / week',
      monthlyCost: '₹25,580',
      totalCost: '₹1,34,136',
      tax: '+ tax',
      badge: 'Fast Track',
      icon: '✨'
    },
    {
      name: 'AGNI',
      duration: '1 Week',
      schedule: 'Full 42 Hours',
      monthlyCost: '₹30,696',
      totalCost: '₹1,44,806',
      tax: '+ tax',
      badge: 'Intensive',
      icon: '🔥'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section - Bold Statement */}
      <section className="relative pt-32 pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="premium-badge mb-6">Investment in Your Evolution</span>
            <h1 className="text-display-sm mb-8">
              Flexible <span className="text-gold italic">Pricing</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Choose your path to transformation. Our structured programs ensure 
              sustainable growth through the timeless principles of Satya and Dharm.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.05),_transparent_70%)]" />
      </section>

      {/* Subsection 1: Program Coverage - Editorial Cards */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-4">
              Curriculum
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-deepCharcoal mb-4">
              Program Coverage
            </h2>
            <p className="text-lightGray text-lg max-w-xl mx-auto">
              Four pillars of transformation, each building upon the other
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programCoverage.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full"
              >
                {/* Card Wrapper with Luxury Border Effect */}
                <div className="relative h-full bg-white rounded-[2rem] p-8 transition-all duration-700 border border-black/[0.03] group-hover:border-gold/30 group-hover:shadow-[0_40px_80px_-20px_rgba(179,139,63,0.12)] flex flex-col">
                  
                  {/* Floating Icon Circle */}
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center text-gold transition-all duration-700 group-hover:bg-gold group-hover:text-white group-hover:rotate-[10deg] shadow-sm border border-gold/10">
                      {program.icon}
                    </div>
                    {/* Decorative Number */}
                    <span className="absolute -top-4 -right-2 text-6xl font-heading font-black text-black/[0.02] select-none group-hover:text-gold/[0.05] transition-colors duration-700">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-deepCharcoal text-2xl tracking-tight group-hover:text-gold transition-colors duration-500">
                        {program.title}
                      </h3>
                      <span className="text-[10px] font-bold tracking-widest text-gold-dark/60 uppercase py-1 px-3 bg-gold/5 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                    
                    <p className="text-sm font-semibold text-gold-dark mb-6 tracking-wide uppercase opacity-80">
                      {program.subtitle}
                    </p>
                    
                    {program.description ? (
                      <p className="text-sm text-muted leading-relaxed font-light italic border-l-2 border-gold/20 pl-4">
                        {program.description}
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {program.topics.slice(0, 5).map((topic, i) => (
                          <li key={i} className="text-xs text-charcoal flex items-start gap-3 group/item">
                            <span className="w-1 h-1 rounded-full bg-gold/40 mt-1.5 group-hover/item:scale-150 group-hover/item:bg-gold transition-all" />
                            <span className="leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{topic}</span>
                          </li>
                        ))}
                        {program.topics.length > 5 && (
                          <li className="text-[10px] text-gold font-bold uppercase tracking-widest pt-2 pl-4">
                            + {program.topics.length - 5} Core Modules
                          </li>
                        )}
                      </ul>
                    )}
                  </div>

                  {/* CTA Area */}
                  <div className="mt-10 pt-6 border-t border-black/[0.03]">
                    <div className="flex items-center justify-between group/link cursor-pointer">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted group-hover/link:text-gold transition-colors">
                        Explore Module
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-black/[0.03] group-hover/link:bg-gold group-hover/link:text-white transition-all duration-500">
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Corner Details */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/20 rounded-tr-[2rem] transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/20 rounded-bl-[2rem] transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsection 2: Fee Structure - Premium Cards */}
      <section className="py-24 bg-deepCharcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deepNavy to-midnight" />
          <div className="absolute inset-0 pattern-lines opacity-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-muted mb-4">
              Investment
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4">
              Fee Structure
            </h2>
            <p className="text-silver text-lg max-w-xl mx-auto">
              Transparent pricing designed for inclusive access
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {feeStructure.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                  fee.badge ? 'border-gold' : 'border-white/10'
                }`}
              >
                {fee.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-semibold tracking-wider rounded-full">
                    {fee.badge}
                  </span>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{fee.decorative}</span>
                  <h3 className="font-heading font-semibold text-white text-xl">
                    {fee.region}
                  </h3>
                </div>

                <div className="space-y-0">
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-silver">Application Fee</span>
                    <span className="font-medium text-white">{fee.applicationFee}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-silver">Admission Fee</span>
                    <span className="font-medium text-white">{fee.admissionFee}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-silver">Security Deposit</span>
                    <span className="font-medium text-white">{fee.securityDeposit}</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-silver">Tuition Fee</span>
                    <span className="font-medium text-gold-light">{fee.tuitionFee}</span>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20 rounded-bl-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsection 3: Learning Plans - SaaS Style with Indian Touch */}
      <section className="py-24 bg-gradient-to-b from-ivory to-softWhite relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-muted/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-4">
              Choose Your Path
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-deepCharcoal mb-4">
              Learning Plans
            </h2>
            <p className="text-lightGray text-lg max-w-xl mx-auto">
              Flexible schedules designed for working professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {learningPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-2xl p-5 border transition-all duration-300 hover:shadow-xl ${
                  plan.badge 
                    ? 'border-gold shadow-gold-muted/20' 
                    : 'border-subtle hover:border-gold/40'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold text-white text-[10px] font-semibold tracking-wider uppercase rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div className="text-center mb-4">
                  <span className="text-2xl block mb-2">{plan.icon}</span>
                  <h3 className="font-heading font-semibold text-deepCharcoal text-lg">
                    {plan.name}
                  </h3>
                  <span className="text-xs text-lightGray">{plan.duration}</span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="text-center py-2 border-b border-subtle">
                    <span className="text-[10px] uppercase tracking-wider text-lightGray">Schedule</span>
                    <p className="font-medium text-charcoal text-sm mt-0.5">{plan.schedule}</p>
                  </div>
                  <div className="text-center py-2 border-b border-subtle">
                    <span className="text-[10px] uppercase tracking-wider text-lightGray">For INDIANS</span>
                    <p className="font-semibold text-gold text-lg">{plan.monthlyCost}</p>
                    <span className="text-[10px] text-lightGray">{plan.tax}</span>
                  </div>
                  <div className="text-center py-2">
                    <span className="text-[10px] uppercase tracking-wider text-lightGray">For OTHERS</span>
                    <p className="font-semibold text-deepCharcoal">{plan.totalCost}</p>
                    <span className="text-[10px] text-lightGray">{plan.tax}</span>
                  </div>
                </div>

                <button className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  plan.badge
                    ? 'bg-gold text-white hover:bg-gold-dark'
                    : 'bg-charcoal text-white hover:bg-deepCharcoal'
                }`}>
                  Select Plan
                </button>

                {/* Subtle corner detail */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 rounded-bl-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section - Elegant Finale */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-ivory rounded-3xl p-12 border border-gold-muted/30 relative overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/30 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/30 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/30 rounded-br-3xl" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl mb-6"
            >
              🏆
            </motion.div>
            
            <h2 className="text-2xl font-heading font-semibold text-deepCharcoal mb-4">
              SADHACHAAR Certification
            </h2>
            <p className="text-lightGray leading-relaxed mb-6">
              Upon completing the 42-hour foundational program, receive your official 
              SADHACHAAR certification and a digital loyalty badge. This recognized 
              credential signifies your commitment to principled living and societal transformation.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-charcoal">
                <span className="w-2 h-2 bg-gold-dark rounded-full"></span>
                Certified
              </span>
              <span className="flex items-center gap-2 text-charcoal">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Digital Badge
              </span>
              <span className="flex items-center gap-2 text-charcoal">
                <span className="w-2 h-2 bg-gold-light rounded-full"></span>
                Lifetime Access
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}