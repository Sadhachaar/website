import { motion } from 'framer-motion';
import aboutBanner from '../assets/about_banner.png';

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header - Full Banner Showcase */}
      <section className="relative overflow-hidden bg-white">
        <div className="w-full h-auto">
          <motion.img 
            src={aboutBanner} 
            alt="Sadhachaar Legacy" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* About Us - Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="premium-badge mb-6">About Us</span>
            <h2 className="text-heading-2 mb-8">SADHACHAAR — <span className="text-gold">An Indigenous Human Happiness System</span></h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                SADHACHAAR is a pioneering initiative built on the foundation of <strong>Lok Vidya</strong> (Satya & Dharm) — an indigenous human education system rooted in Indian cultural wisdom. It is designed to create and empower individuals, families, and societies by aligning human thought, action, and purpose through a structured and transformative approach.
              </p>
              <p>
                At its core, SADHACHAAR introduces a <strong>Human Operating System</strong> for life, focused on cultivating a "Loyalty Chain" that leads to sustainable happiness, using a blend of ancient wisdom and modern methodology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-heading-3 mb-6">Our Vision</h3>
              <p className="text-xl font-heading font-medium text-charcoal mb-4">World Happiness Index — India Rank 1</p>
              <p className="text-muted leading-relaxed">
                We envision India becoming the happiest nation in the world, built on strong individuals, stable families, and value-driven communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-heading-3 mb-6">Our Mission</h3>
              <p className="text-muted leading-relaxed mb-4">
                To train and transform every home toward holistic development by:
              </p>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-gold">✦</span>
                  Leveraging the profound principles of Satya (Truth) and Dharm (Duty)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✦</span>
                  Reviving Lok Vidya — primary human education
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✦</span>
                  Integrating Indian cultural knowledge with structured learning systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✦</span>
                  Contributing to global Sustainable Development Goals
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="premium-badge mb-6">Our Promise</span>
            <h2 className="text-heading-2 mb-12">What We Commit To</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📈', title: 'Top 10 Ranking', desc: 'Achieve Top 10 ranking in the World Happiness Index by 2044' },
              { icon: '🏗️', title: 'Scalable Model', desc: 'Build a scalable model that transforms society from the ground up' },
              { icon: '🌱', title: 'Sustainable Happiness', desc: 'Create a system where happiness is measurable, teachable, and sustainable' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card text-center"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Address */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="premium-badge bg-gold/20 text-gold border-gold/30 mb-6">The Problem</span>
            <h2 className="text-heading-2">Why SADHACHAAR Exists</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '😔', title: 'Mental Health Crisis', desc: 'Increasing stress, anxiety, and dissatisfaction in modern society' },
              { icon: '🏚️', title: 'Cultural Loss', desc: 'Loss of cultural grounding and human values' },
              { icon: '🎲', title: 'Unpredictable Outcomes', desc: 'Unpredictable life outcomes despite education and effort' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/60 mt-12 text-lg">
            India currently ranks low in global happiness metrics, highlighting the need for a fundamental human system upgrade.
          </p>
        </div>
      </section>

      {/* Our Approach - Lok Vidya */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="premium-badge mb-6">Our Approach</span>
            <h2 className="text-heading-2 mb-4">Lok Vidya <span className="text-gold">(Satya & Dharm)</span></h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              SADHACHAAR introduces Lok Vidya, a rediscovered primary education system that bridges ancient Indian wisdom with modern life challenges.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '🌟', title: 'Unique Potential', desc: 'Recognizes every human as unique and exceptional' },
              { icon: '🔄', title: 'No Comparison', desc: 'Eliminates comparison, competition, and social conditioning' },
              { icon: '⚖️', title: 'Alignment', desc: 'Focuses on alignment, purpose, and inner stability' },
              { icon: '🌍', title: 'One Family', desc: 'Revives "Vasudhaiva Kutumbakam" — The world is one family' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-md font-bold mb-3">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-black/5"
          >
            <h3 className="text-heading-3 mb-8 text-center">Enabling Individuals to Achieve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Clarity', 'Happiness', 'Purpose', 'Peace of mind'].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{['💡', '😊', '🎯', '🕉️'][index]}</span>
                  </div>
                  <span className="font-bold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Foundation */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="premium-badge mb-6">Research & Foundation</span>
            <h2 className="text-heading-2">Built on Extensive Long-Term Research</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card border-l-4 border-gold"
            >
              <div className="text-4xl mb-6">🔬</div>
              <h3 className="text-heading-3 mb-4">Research Phase (Since 2004)</h3>
              <p className="text-muted mb-6">Studied over 2 Crore individuals across India</p>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  16+ States covered
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  42+ Districts studied
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Urban & rural populations
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card border-l-4 border-gold"
            >
              <div className="text-4xl mb-6">🧪</div>
              <h3 className="text-heading-3 mb-4">Test Phase (Since 2019)</h3>
              <p className="text-muted mb-6">5,000+ individuals tested across multiple regions</p>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Applied across diverse cultural environments
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Tested across social environments
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Data-backed, real-world system
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="premium-badge mb-6">Our Purpose</span>
            <h2 className="text-heading-2">Building a Nation Where</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '👤', title: 'Every Individual', desc: 'Is aligned with their true potential' },
              { icon: '👨‍👩‍👧', title: 'Every Family', desc: 'Operates with stability and unity' },
              { icon: '🏘️', title: 'Every Community', desc: 'Functions with trust and responsibility' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card text-center"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-2xl font-heading text-charcoal">
              Ultimately creating a <span className="text-gold">predictable, peaceful, and high-performing</span> society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Belief */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="premium-badge mb-6">Our Core Belief</span>
            <h2 className="text-3xl md:text-4xl font-heading italic text-charcoal mb-8">
              "Happiness is not accidental — it can be designed, taught, and sustained."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-2 mb-8">SADHACHAAR is not just an initiative —</h2>
            <p className="text-2xl md:text-3xl font-heading text-white/90 leading-relaxed">
              it is a systematic transformation model for humanity,<br />
              starting with India and scaling globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-medium italic text-charcoal mb-8">
              "We are building a future where every human is a lighthouse of stability."
            </h2>
            <div className="w-12 h-1 bg-gold/40 mx-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}