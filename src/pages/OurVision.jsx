import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logoMark from '../assets/logo_mark.jpg';

export default function OurVision() {
  const { t } = useTranslation();

  const ageGroups = [
    { age: '12–18', urgency: 'Low', color: 'bg-gold-muted/20 text-gold-dark border border-gold/20' },
    { age: '18–30', urgency: 'Medium', color: 'bg-gold/10 text-gold-dark border border-gold/30' },
    { age: '30–45', urgency: 'High', color: 'bg-gold/20 text-gold-dark border border-gold/40' },
    { age: '45–60', urgency: 'High', color: 'bg-gold/20 text-gold-dark border border-gold/40' },
    { age: '60+', urgency: 'High', color: 'bg-gold/20 text-gold-dark border border-gold/40' }
  ];

  const benefits = [
    { icon: '◈', title: '64 Arts & 24 Qualities', desc: 'Discover the ultimate power of Indian culture and their impact on human life' },
    { icon: '◈', title: 'Self Discovery', desc: '"Who am I?" / "Why am I here?" exploration through deeper understanding' },
    { icon: '◈', title: 'Inner Transformation', desc: 'Groom the inner self for one\'s own creation and transformation' },
    { icon: '◈', title: 'Values Building', desc: 'Build values around respect, money, and happiness' },
    { icon: '◈', title: 'Practical Wisdom', desc: 'Combine knowledge, culture, and values with practical life wisdom' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header - Vision Hero */}
      {/* Header - Vision Hero */}
      <section className="relative pt-32 pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="premium-badge mb-6">Holistic Learning Ecosystem</span>
            <h1 className="text-display-sm mb-8">
              Our <span className="text-gold italic">Vision</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              "To Generate Balanced CARE & INSPIRE through a holistic happiness ecosystem for sustainable development."
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.05),_transparent_70%)]" />
      </section>

      {/* Full Width - Cinematic Orbital Animation */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Depth Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gold-muted/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative w-full aspect-[21/9] flex items-center justify-center">
            
            {/* The SVG Engine */}
            <svg viewBox="0 0 1000 450" className="w-full h-full drop-shadow-2xl overflow-visible">
              <defs>
                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B38B3F" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#B38B3F" stopOpacity="0" />
                </linearGradient>
                
                <filter id="bloom" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <radialGradient id="divineGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central Divine Glow */}
              <motion.circle
                cx="500" cy="225" r="150"
                fill="url(#divineGlow)"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />

              {/* Main Elliptical Orbit Rings */}
              {[1, 0.8, 0.6].map((scale, i) => (
                <motion.ellipse
                  key={i}
                  cx="500" cy="225" rx={400 * scale} ry={180 * scale}
                  fill="none"
                  stroke="url(#orbitGradient)"
                  strokeWidth="1.5"
                  strokeDasharray={i === 1 ? "10 20" : "none"}
                  opacity={0.2 + (i * 0.1)}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.3 }}
                />
              ))}

              {/* Flowing Energy Particles */}
              {[0, 1, 2, 3, 4, 5].map((delay, i) => (
                <motion.circle key={i} r="2.5" fill="#D4AF37" filter="url(#bloom)">
                  <animateMotion 
                    dur={`${6 + (i % 3)}s`} 
                    repeatCount="indefinite" 
                    begin={`${delay}s`}
                    path="M 100,225 A 400,180 0 1,1 900,225 A 400,180 0 1,1 100,225" 
                  />
                </motion.circle>
              ))}

              {/* Centerpiece Content */}
              <g className="cursor-pointer group">
                {/* The Logo Orb */}
                <motion.g
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <circle cx="500" cy="225" r="65" fill="white" className="shadow-xl" />
                  <circle cx="500" cy="225" r="65" fill="none" stroke="#B38B3F" strokeWidth="0.5" opacity="0.5" />
                  <image href={logoMark} x="450" y="175" width="100" height="100" className="rounded-full" />
                  <motion.circle
                    cx="500" cy="225" r="75"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeDasharray="5 15"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  />
                </motion.g>
              </g>

              {/* Orbital Nodes - Redesigned as Premium Glass Pointers */}
              {[
                { label: 'Family', icon: '🏠', angle: 150, highlight: true },
                { label: 'Relationship', icon: '❤️', angle: 180 },
                { label: 'Community', icon: '👥', angle: 210 },
                { label: 'Society', icon: '🌍', angle: 330 },
                { label: 'Organisation', icon: '🏢', angle: 0 },
                { label: 'Humanity', icon: '👤', angle: 30 }
              ].map((node, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (i * 0.1), type: "spring" }}
                  className="cursor-pointer"
                >
                  {(() => {
                    const cx = 500, cy = 225, r = 400;
                    const rad = node.angle * Math.PI / 180;
                    const x = cx + r * Math.cos(rad);
                    const y = cy + r * Math.sin(rad);
                    return (
                      <>
                        {/* Node Background */}
                        <circle cx={x} cy={y} r={node.highlight ? "28" : "22"} fill={node.highlight ? "#D4AF37" : "white"} shadow-md />
                        <circle cx={x} cy={y} r={node.highlight ? "28" : "22"} fill="none" stroke="#B38B3F" strokeWidth={node.highlight ? "2" : "0.5"} opacity="0.3" />
                        
                        {/* Icon */}
                        <text x={x} y={y + 7} textAnchor="middle" fontSize={node.highlight ? "26" : "22"} fill={node.highlight ? "white" : "inherit"}>
                          {node.icon}
                        </text>

                        {/* Label with Glass Effect */}
                        <g>
                          <rect 
                            x={x - 50} 
                            y={y > 225 ? y + 30 : y - 50} 
                            width="100" 
                            height="20" 
                            rx="10" 
                            fill={node.highlight ? "#D4AF37" : "white"} 
                            opacity="0.9" 
                          />
                          <text 
                            x={x} 
                            y={y > 225 ? y + 42 : y - 38} 
                            textAnchor="middle" 
                            fill={node.highlight ? "white" : "#3A3A3A"} 
                            className="font-bold tracking-widest uppercase"
                            style={{ fontSize: node.highlight ? '9px' : '9px' }}
                          >
                            {node.label}
                          </text>
                          {node.highlight && (
                            <text 
                              x={x} 
                              y="496" 
                              textAnchor="middle" 
                              fill="#3A3A3A" 
                              style={{ fontSize: '14px', fontWeight: 'bold' }}
                            >
                              STARTING WITH
                            </text>
                          )}
                        </g>

                        {/* Strong Ripple Effect for Family */}
                        {node.highlight && (
                          <>
                            <motion.circle
                              cx={x} cy={y} r="28"
                              fill="none"
                              stroke="#D4AF37"
                              strokeWidth="2"
                              initial={{ scale: 1, opacity: 0.8 }}
                              animate={{ scale: [1, 1.5, 1.8, 2.2], opacity: [0.8, 0.6, 0.4, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            />
                            <motion.circle
                              cx={x} cy={y} r="28"
                              fill="none"
                              stroke="#D4AF37"
                              strokeWidth="2"
                              initial={{ scale: 1, opacity: 0.8 }}
                              animate={{ scale: [1, 1.5, 1.8, 2.2], opacity: [0.8, 0.6, 0.4, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            />
                          </>
                        )}

                        {/* Regular Hover Pulse */}
                        {!node.highlight && (
                          <motion.circle
                            cx={x} cy={y} r="22"
                            fill="none"
                            stroke="#B38B3F"
                            strokeWidth="1"
                            animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                          />
                        )}
                      </>
                    );
                  })()}
                </motion.g>
              ))}

              {/* TOP LEVEL TEXT - Right and Left, No Animation */}
              <g pointerEvents="none" className="font-heading font-black italic tracking-[0.25em]">
                <text
                  x="385" y="235"
                  textAnchor="end"
                  fill="#B38B3F"
                  style={{ fontSize: '26px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                >
                  INSPIRE
                </text>
                <text
                  x="385" y="255"
                  textAnchor="end"
                  fill="#B38B3F"
                  style={{ fontSize: '12px', opacity: 0.7 }}
                >
                  DEVELOPMENT
                </text>
                
                <text
                  x="615" y="235"
                  textAnchor="start"
                  fill="#B38B3F"
                  style={{ fontSize: '26px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                >
                  CARE
                </text>
                <text
                  x="615" y="255"
                  textAnchor="start"
                  fill="#B38B3F"
                  style={{ fontSize: '12px', opacity: 0.7 }}
                >
                  SUSTAINABILITY
                </text>
              </g>
            </svg>
            
          </div>
        </div>
      </section>

      {/* Admission Highlight + Eligibility + Benefits */}
      <section className="py-24 bg-softWhite relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-muted/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Admission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-gold/10 via-gold-muted/20 to-ivory rounded-2xl p-6 border border-gold/30 h-full">
                <span className="inline-block px-4 py-1.5 bg-gold text-white text-sm font-medium rounded-full mb-4">
                  ADMISSION OPEN
                </span>
                
                <ul className="space-y-3">
                  {[
                    { icon: '✦', text: 'Strengthen Wisdom' },
                    { icon: '✦', text: 'Unique Identity' },
                    { icon: '✦', text: 'Clarity on Quality Life' },
                    { icon: '✦', text: 'Hands on Time' },
                    { icon: '✦', text: 'Cultivation of Happy Life' }
                  ].map((point, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 2 }}
                      className="flex items-center gap-2 text-charcoal text-sm"
                    >
                      <span className="text-gold text-xs">{point.icon}</span>
                      <span>{point.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gold/10 rounded-full blur-2xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/30 rounded-bl-lg" />
              </div>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-4 block">
                ELIGIBILITY-URGENCY
              </span>
              
              <div className="space-y-3">
                {ageGroups.map((group, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 2 }}
                    className="group flex items-center justify-between bg-white rounded-lg p-3 border border-gold-muted/20 hover:border-gold/50 transition-all"
                  >
                    <span className="font-medium text-deepCharcoal text-sm">
                      Age {group.age}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${group.color}`}>
                      {group.urgency}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-ivory rounded-2xl p-6 border border-gold-muted/30 h-full">
                <h3 className="text-xl font-heading font-semibold text-deepCharcoal mb-4">
                  BENEFITS
                </h3>
                
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5">{benefit.icon}</span>
                      <div>
                        <p className="font-medium text-charcoal text-sm">{benefit.title}</p>
                        <p className="text-xs text-lightGray leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 rounded-bl-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deepCharcoal text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deepNavy to-midnight" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-muted mb-6">
              Begin Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Join the Transformation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the movement to create a happier, more balanced world through Lok Vidya.
            </p>
            <a 
              href="/pricing" 
              className="inline-block px-8 py-4 bg-gold text-charcoal font-medium rounded-xl hover:bg-gold-dark transition-all"
            >
              Explore Plans
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}