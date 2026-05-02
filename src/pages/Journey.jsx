import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { journeyTimeline } from '../data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 }
};

export default function Journey() {
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
              Our Journey
            </h1>
            <p className="text-lightGray text-lg">
              Two decades of research and transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron/30" />

            {journeyTimeline.map((milestone, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-saffron transform -translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="card">
                    <span className="inline-block px-3 py-1 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-deepBlue mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-lightGray text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}