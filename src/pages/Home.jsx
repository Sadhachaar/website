import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import gallery1 from '../assets/gallery_img_1.jpg';
import gallery2 from '../assets/gallery_img_2.jpg';
import gallery3 from '../assets/gallery_img_3.jpg';
import gallery4 from '../assets/gallery_img_4.jpg';
import gallery5 from '../assets/gallery_img_5.jpg';
import gallery6 from '../assets/gallery_img_6.jpg';
import gallery7 from '../assets/gallery_img_7.jpg';

const heroImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

const sadhachaarMeaning = [
  { letter: 'S', icon: '🧘', meaning: 'Stability of Mind' },
  { letter: 'A', icon: '🎯', meaning: 'Alignment of Thought, Word, Action' },
  { letter: 'D', icon: '⚖️', meaning: 'Dharm (Authentic Duty)' },
  { letter: 'H', icon: '✨', meaning: 'Happiness Foundation' },
  { letter: 'A', icon: '💠', meaning: 'Authentic Living' },
  { letter: 'C', icon: '🛡️', meaning: 'Character Building' },
  { letter: 'H', icon: '🌿', meaning: 'Holistic Growth' },
  { letter: 'A', icon: '☸️', meaning: 'Ashoka Chakra Qualities' },
  { letter: 'A', icon: '🎭', meaning: '64 Arts of Indian Culture' },
  { letter: 'R', icon: '🔄', meaning: 'RESET for Transformation' },
];

const impactStats = [
  { value: '2,068+', label: 'Families Covered', sub: 'Inclusive & diverse outreach' },
  { value: '2 Crore+', label: 'Lives Researched', sub: 'Evidence-based since 2004' },
  { value: '16 | 42', label: 'States | Districts', sub: 'Pan-India presence' },
  { value: '327+', label: 'Families Healed', sub: 'Restoring domestic harmony' },
  { value: '213+', label: 'Lives Reclaimed', sub: 'Mental wellness & resilience' },
  { value: '45%', label: 'Habit Mastery', sub: 'Overcoming destructive patterns' },
];

const launchStations = [
  { title: 'Family', desc: 'Restores oneness between spouses and generations, transforming houses into homes.', icon: '🏠' },
  { title: 'Relations', desc: 'Heals the "crisis beneath the crisis" by correcting inherited blind spots.', icon: '🔗' },
  { title: 'Community', desc: 'Reduces local friction and corrects toxic social habits like gambling.', icon: '🌿' },
  { title: 'Society', desc: 'Drives large-scale stability by reducing behavioral crimes through education.', icon: '⚖️' },
  { title: 'Workspace', desc: 'Integrates the Loyal Gold Citizen Index (LGCI) to improve predictability.', icon: '💼' },
  { title: 'Humanity', desc: "India's gift to the world — where efficiency meets timeless ethics.", icon: '🌍' },
];

const resetSteps = [
  { title: 'Realize', desc: 'Identify blind spots through cultural psychometry', icon: '👁️' },
  { title: 'Engage', desc: 'Apply 64 Arts to align skills and energy', icon: '⚡' },
  { title: 'Serve', desc: 'Deliver value through authentic duty (Dharm)', icon: '🤝' },
  { title: 'Evolve', desc: 'Break past cycles and unlock inner strength', icon: '🌱' },
  { title: 'Transform', desc: 'Achieve sustainable self-actualization', icon: '✨' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Cinematic & Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={heroImages[currentSlide]} 
                alt="Sadhachaar Hero" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/40 to-ivory" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="premium-badge mb-8 mx-auto w-fit"
            >
              {t('hero.tagline')}
            </motion.div>
            <h1 className="text-white text-display mb-8 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://forms.gle/pyBuiRvMengcCeLy8" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                <span>MISSION SADHA</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2 inline-block"
                >
                  →
                </motion.span>
              </a>
              <Link to="/about" className="btn-secondary">
                {t('cta.explore')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements for depth */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </section>

      {/* Introduction - The "Why" */}
      <section className="section-padding bg-ivory relative border-b border-black/[0.03]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="premium-badge mb-6">Indigenous Human Operating System</span>
            <h2 className="text-heading-1 mb-8 text-balance">
              The World's First Indigenous <span className="text-gold italic">Human Operating System</span>
            </h2>
            <p className="text-xl text-muted mb-10 leading-relaxed max-w-3xl mx-auto">
              Aligning Thought, Word, and Action through <strong className="text-gold-dark font-semibold">Lok Vidya</strong>. We aren't just a program; we are a systematic upgrade for the human spirit.
            </p>
            <div className="w-20 h-1 bg-gold/30 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Meaning of SADHACHAAR - Interactive Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="premium-badge mb-4">Core Philosophy</span>
            <h2 className="text-heading-2">The Architecture of SADHACHAAR</h2>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {sadhachaarMeaning.map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                className="premium-card p-6 text-center group cursor-default relative overflow-hidden"
              >
                {/* Floating Letter Accent */}
                <div className="absolute top-3 right-4 text-[10px] font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                  {item.letter}
                </div>
                
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold/5 flex items-center justify-center border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm text-3xl">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-charcoal leading-tight px-2">{item.meaning}</h4>
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gold/30 mx-auto transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Dashboard - Visual Storytelling */}
      <section className="section-padding bg-charcoal text-white relative">
        <div className="absolute inset-0 bg-deepNavy/95" />
        <div className="absolute inset-0 pattern-lines opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
              <span className="premium-badge border-white/20 text-gold-light mb-6">Our Impact</span>
              <h2 className="text-heading-2 text-white mb-6">Quantifying Transformation</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Since 2004, we have meticulously mapped the human condition across India, creating a data-driven path to collective happiness.
              </p>
              <Link to="/journey" className="text-gold font-bold tracking-widest uppercase text-xs hover:text-gold-light transition-colors inline-flex items-center gap-2 group">
                View Full Journey <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-gold/40 transition-all duration-500"
                >
                  <div className="text-4xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                  <div className="font-bold text-sm text-white mb-2">{stat.label}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Launch Stations - Immersive Grid */}
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

      {/* Methodology - The RESET Process */}
      <section className="section-padding bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-4">
                {resetSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-6 rounded-3xl hover:bg-ivory transition-colors group cursor-default border border-transparent hover:border-gold/10"
                  >
                    <div className="text-2xl flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/5 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 flex items-center gap-3">
                        <span className="text-gold text-xs">Step 0{index + 1}</span>
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
              <span className="premium-badge mb-6">Methodology</span>
              <h2 className="text-heading-1 mb-8">The RESET <br /><span className="text-gold italic">Transformation</span></h2>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Our systematic approach to "upgrading" the human operating system, moving from realization to complete self-actualization.
              </p>
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gold/10 rounded-full blur-2xl" />
                <div className="relative text-7xl font-heading font-bold text-gold-light opacity-20 select-none tracking-tighter">RESET</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic Quote - Spiritual Anchor */}
      <section className="py-40 bg-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.15),_transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-16 h-16 mx-auto mb-12 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium italic leading-tight text-balance mb-12">
              "When humans are aligned,<br />systems don't fail."
            </h2>
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold">The Sadhachaar Principle</p>
          </motion.div>
        </div>
      </section>

      {/* CTA - The Invitation */}
      <section className="section-padding bg-ivory text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-1 mb-8">Ready for an Upgrade?</h2>
            <p className="text-xl text-muted mb-12 leading-relaxed">
              Join the movement that is rebuilding society from the foundation up. Start your 21-day transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://forms.gle/pyBuiRvMengcCeLy8" target="_blank" rel="noopener noreferrer" className="btn-primary">
                MISSION SADHA
              </a>
              <Link to="/contact" className="btn-secondary">
                Connect With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}