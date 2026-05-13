import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutBanner from '../assets/about_banner.png';

const launchStations = [
  { title: 'Family', desc: 'Restores oneness between spouses and generations, transforming houses into homes.', icon: '🏠' },
  { title: 'Relations', desc: 'Heals the "crisis beneath the crisis" by correcting inherited blind spots.', icon: '🔗' },
  { title: 'Community', desc: 'Reduces local friction and corrects toxic social habits like gambling.', icon: '🌿' },
  { title: 'Society', desc: 'Drives large-scale stability by reducing behavioral crimes through education.', icon: '⚖️' },
  { title: 'Workspace', desc: 'Integrates the Loyal Gold Citizen Index (LGCI) to improve predictability.', icon: '💼' },
  { title: 'Humanity', desc: "India's gift to the world — where efficiency meets timeless ethics.", icon: '🌍' },
];

const ourProjects = [
  { title: 'Police Stress Management', desc: 'Mental wellness programs for law enforcement', icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )},
  { title: 'Teacher Empowerment', desc: 'Training educators for holistic student development', icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )},
  { title: 'Village Transformation', desc: 'Community-led development initiatives', icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H8m8 0v-2a3 3 0 00-5.356-1.857M8 20H3v-2a3 3 0 015.356-1.857M8 20h9m-9-8v2a3 3 0 005.356 1.857M15 10h5m-5 0v2a3 3 0 01-5.356 1.857M15 10H8m8 0v2a3 3 0 01-5.356 1.857M8 10H3V8m5 0h5m-5 0v2a3 3 0 01-5.356 1.857M15 10h5m-5 0v2a3 3 0 005.356 1.857" />
    </svg>
  )}
];

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

      {/* Our Journey PDF */}
      <section className="section-padding bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gold/5 rounded-[48px] blur-2xl group-hover:bg-gold/10 transition-all duration-700" />
            
            <div className="relative bg-white border border-black/5 rounded-[40px] overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-black/5 flex justify-between items-center bg-ivory/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <span className="text-gold text-lg">📄</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal leading-none">our_journey.pdf</h3>
                    <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Foundation to Future</p>
                  </div>
                </div>
                <a 
                  href="/our_journey.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-charcoal text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gold transition-all duration-300 shadow-lg"
                >
                  View Full PDF
                </a>
              </div>

              <div className="aspect-[16/10] w-full bg-gray-100 relative group/preview">
                <iframe 
                  src="/our_journey.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                  title="Journey PDF Preview"
                  className="w-full h-full border-none opacity-90 group-hover/preview:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted leading-relaxed max-w-2xl mx-auto">
                This document details our 20-year evolution, from early behavioral research to the global implementation of the Human Operating System.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="section-padding bg-softWhite relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-muted/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-4">
              Initiatives
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-deepCharcoal mb-4">
              Our Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {ourProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-8 text-center border border-gold-muted/20 hover:border-gold/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                  {project.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-deepCharcoal mb-2">{project.title}</h3>
                <p className="text-lightGray text-sm">{project.desc}</p>

                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 rounded-bl-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Launch Stations */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="premium-badge mb-4">Scalability</span>
            <h2 className="text-heading-2">The 6 Launch Stations</h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">Implementing the Sadhachaar system across every layer of human interaction.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {launchStations.map((station, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-sm border border-gold/10">
                    {station.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{station.title}</h3>
                </div>
                <p className="text-muted leading-relaxed">{station.desc}</p>
                <div className="mt-8 pt-6 border-t border-black/[0.03] flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Station 0{index + 1}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
              href="https://forms.gle/pyBuiRvMengcCeLy8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-charcoal font-medium rounded-xl hover:bg-gold-dark transition-all"
            >
              MISSION SADHA
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}