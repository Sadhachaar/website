import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stats, resetFramework } from '../data';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

import gallery1 from '../assets/gallery_img_1.jpg';
import gallery2 from '../assets/gallery_img_2.jpg';
import gallery3 from '../assets/gallery_img_3.jpg';
import gallery4 from '../assets/gallery_img_4.jpg';
import gallery5 from '../assets/gallery_img_5.jpg';
import gallery6 from '../assets/gallery_img_6.jpg';
import gallery7 from '../assets/gallery_img_7.jpg';

const heroImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

const chartData = [
  { year: '2015', value: 10 },
  { year: '2016', value: 25 },
  { year: '2017', value: 45 },
  { year: '2018', value: 60 },
  { year: '2019', value: 78 },
  { year: '2020', value: 85 },
  { year: '2021', value: 92 },
  { year: '2022', value: 96 },
  { year: '2023', value: 98 },
  { year: '2024', value: 99.9 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={heroImages[currentSlide]} 
                alt="Hero background" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-deepBlue/80 via-deepBlue/60 to-deepBlue/90" />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,153,51,0.1),_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-saffron/20 text-saffron rounded-full text-sm font-medium mb-6">
              {t('hero.tagline')}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lgci" className="btn-primary text-lg">
                {t('cta.calculate')}
              </Link>
              <Link to="/about" className="btn-secondary text-lg">
                {t('cta.explore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="card text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-saffron mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-lightGray">
                  {t(stat.key)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="section-padding bg-softWhite">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mb-4">
              What is Human Operating System?
            </h2>
            <p className="text-lightGray max-w-2xl mx-auto">
              Just as a computer needs an operating system to function optimally, humans need a framework to operate at their highest potential. Sadhachaar provides this scientific yet spiritual operating system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-deepBlue mb-4">Lok Vidya: People's Science</h3>
                <p className="text-lightGray leading-relaxed mb-6">
                  Based on research spanning 20 million+ lives, we identified timeless principles that govern healthy families and thriving communities. This is not textbook theory — it's tested wisdom.
                </p>
                <ul className="space-y-3">
                  {['Behavioral patterns', 'Family dynamics', 'Community health', 'Personal growth'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-saffron" />
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-deepBlue mb-4">Impact Growth</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="year" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#FF9933" strokeWidth={3} dot={{ fill: '#FF9933' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-sm text-lightGray mt-4">Satisfaction rate over years (%)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R-E-S-E-T Framework */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mb-4">
              R-E-S-E-T Framework
            </h2>
            <p className="text-lightGray max-w-2xl mx-auto">
              Our five-step methodology for personal and societal transformation
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {resetFramework.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="card text-center group hover:border-saffron border-2 border-transparent"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-saffron/10 flex items-center justify-center group-hover:bg-saffron transition-colors">
                  <span className="text-2xl font-heading font-bold text-saffron group-hover:text-white transition-colors">
                    {step.letter}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-deepBlue mb-2">{step.word}</h4>
                <p className="text-sm text-lightGray">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deepBlue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Transform?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of families who have already begun their journey with Sadhachaar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lgci" className="btn-primary text-lg bg-white text-saffron hover:bg-gray-100">
                {t('cta.calculate')}
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg border-white text-white hover:bg-white hover:text-saffron">
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}