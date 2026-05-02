import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { resetFramework } from '../data';

const features = [
  {
    title: 'What is Lok Vidya?',
    description: 'Lok Vidya (People\'s Science) is our proprietary methodology that combines ancient Indian wisdom with modern behavioral science. It addresses the root causes of societal issues rather than just treating symptoms.',
    icon: '📖'
  },
  {
    title: 'Human Operating System',
    description: 'Just as computers need an OS to function, humans need a framework to operate at their best. This system covers mental health, relationships, career, and purpose — creating holistic well-being.',
    icon: '⚙️'
  },
  {
    title: 'The R-E-S-E-T Methodology',
    description: 'Our 5-step framework provides actionable steps to recognize patterns, evaluate current state, strategize changes, execute plans, and transform permanently.',
    icon: '🔄'
  }
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-softWhite section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opcode: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deepBlue mb-4">
              About Sadhachaar
            </h1>
            <p className="text-lightGray text-lg">
              Restoring Families, Rebuilding Communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex flex-col md:flex-row gap-6 md:items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-deepBlue mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-lightGray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R-E-S-E-T Interactive */}
      <section className="section-padding bg-softWhite">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mb-4">
              R-E-S-E-T Methodology
            </h2>
            <p className="text-lightGray max-w-2xl mx-auto">
              Our interactive five-step framework for personal transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {resetFramework.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-saffron text-white flex items-center justify-center text-2xl font-heading font-bold">
                  {step.letter}
                </div>
                <h4 className="font-heading font-semibold text-deepBlue mb-2 text-lg">{step.word}</h4>
                <p className="text-sm text-lightGray">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}