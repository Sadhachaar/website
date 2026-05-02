import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { launchStations } from '../data';

export default function LaunchStations() {
  const { t } = useTranslation();

  const statusColors = {
    'Active': 'bg-green-100 text-green-700',
    'Launching Soon': 'bg-amber-100 text-amber-700',
    'Planning': 'bg-gray-100 text-gray-700'
  };

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
              Launch Stations
            </h1>
            <p className="text-lightGray text-lg">
              Our centers of transformation across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map/Locations */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-softWhite min-h-[400px] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lightGray">Interactive map coming soon</p>
              </div>
            </motion.div>

            {/* Location Cards */}
            <div className="grid gap-4 content-start">
              {launchStations.map((station, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-semibold text-deepBlue text-lg">
                      {station.location}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[station.status]}`}>
                      {station.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {station.projects.map((project, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-charcoal">
                        {project}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-softWhite">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mb-4">
              Our Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Police Stress Management', desc: 'Mental wellness programs for law enforcement', icon: '👮' },
              { title: 'Teacher Empowerment', desc: 'Training educators for holistic student development', icon: '📚' },
              { title: 'Village Transformation', desc: 'Community-led development initiatives', icon: '🏘️' }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="font-heading font-semibold text-deepBlue mb-2">{project.title}</h3>
                <p className="text-lightGray text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}