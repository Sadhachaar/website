import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutBanner from '../assets/about_banner.png';

export default function About() {
  const { t } = useTranslation();

  const corePrinciples = [
    { title: 'Stability of Mind', desc: 'Sadhachaar creates a consistent mental state that remains unshakeable in the face of external chaos.', icon: '🧠' },
    { title: 'Alignment', desc: 'Ensuring your internal intent (Thought) matches your speech (Word) and your behavior (Action).', icon: '⚖️' },
    { title: 'Authentic Duty', desc: 'Understanding your unique role in the ecosystem and executing it with absolute sincerity.', icon: '🎯' },
    { title: 'Character Building', desc: 'Moving from individual success to collective value through 24 essential qualities.', icon: '💎' },
  ];

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

      {/* Main Content - Narrative Split */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
                <h2 className="text-heading-2 mb-8">Bridging Ancient Wisdom & <span className="text-gold">Modern Science</span></h2>
                <div className="space-y-6 text-muted text-lg leading-relaxed">
                  <p>
                    Sadhachaar is not just a philosophy; it is a <strong>Human Operating System (HOS)</strong>. Rooted in the timeless principles of Sanatana Dharma, it has been refined through over two decades of research covering millions of lives across India.
                  </p>
                  <p>
                    Our mission is simple: to create a conflict-free world by upgrading the behavioral software of the human mind. We believe that when an individual is aligned with <strong>Satya</strong> (Truth) and <strong>Dharm</strong> (Duty), they become a pillar of stability for their family and society.
                  </p>
                </div>
                <div className="mt-12 flex gap-8">
                  <div>
                    <div className="text-4xl font-heading font-bold text-gold">22+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted mt-1">Years of Research</div>
                  </div>
                  <div className="w-px h-12 bg-black/5" />
                  <div>
                    <div className="text-4xl font-heading font-bold text-gold">2Cr+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted mt-1">Lives Impacted</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card group"
                >
                  <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{principle.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Founder Section - Immersive */}
      <section className="section-padding bg-ivory relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-xl border border-black/5 flex flex-col lg:flex-row gap-16 items-center relative">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gold/20 rounded-[32px] blur-2xl group-hover:bg-gold/30 transition-all duration-700" />
                <div className="relative w-full aspect-square bg-charcoal rounded-[32px] overflow-hidden">
                   {/* Placeholder for Founder Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-heading">S</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="premium-badge mb-6">The Visionary</span>
                <h2 className="text-heading-2 mb-6">Dr. Satya Sadhachaar</h2>
                <p className="text-lg text-muted italic mb-8 leading-relaxed">
                  "Happiness is not an achievement; it is a foundation. When your inner operating system is stable, success in the outer world becomes a natural byproduct."
                </p>
                <p className="text-muted leading-relaxed">
                  With a background in both spiritual sciences and behavioral psychology, Dr. Satya has dedicated his life to uncovering the systematic patterns of human behavior that lead to either chaos or harmony.
                </p>
              </motion.div>
            </div>
          </div>
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