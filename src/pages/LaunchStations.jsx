import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { launchStations } from '../data';

export default function LaunchStations() {
  const { t } = useTranslation();

  const statusConfig = {
    'Active': { bg: 'bg-gold', text: 'bg-gold-muted/20', label: 'text-gold-dark', border: 'border-gold/30' },
    'Launching Soon': { bg: 'bg-gold-light', text: 'bg-gold-muted/10', label: 'text-gold-dark', border: 'border-gold/20' },
    'Planning': { bg: 'bg-charcoal/40', text: 'bg-gray-100', label: 'text-charcoal/60', border: 'border-gray-200' }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="premium-badge mb-6">Transformation Hubs</span>
            <h1 className="text-display-sm mb-8">
              Launch <span className="text-gold italic">Stations</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Our centers of transformation across India, where the journey to a balanced life begins.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.05),_transparent_70%)]" />
      </section>

      {/* Map & Locations - Split Layout */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-ivory rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-gold-muted/20"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gold/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 3l6-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-deepCharcoal mb-2">
                  Interactive Map
                </h3>
                <p className="text-lightGray">Coming soon</p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/20 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/20 rounded-br-2xl" />
            </motion.div>

            {/* Location Cards */}
            <div className="space-y-4">
              {launchStations.map((station, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group relative bg-ivory rounded-2xl p-5 border border-gold-muted/20 hover:border-gold/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-semibold text-deepCharcoal text-lg">
                      {station.location}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[station.status].bg} ${statusConfig[station.status].text} ${statusConfig[station.status].label}`}>
                      {station.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {station.projects.map((project, i) => (
                      <span key={i} className="px-3 py-1 bg-gold-muted/20 rounded-full text-xs text-charcoal">
                        {project}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Grid */}
      <section className="py-24 bg-softWhite relative">
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
            {[
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
            ].map((project, index) => (
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
              Get Involved
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Start a Launch Station
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in bringing SADHACHAAR to your community? Let's discuss how we can work together to transform lives.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-gold text-charcoal font-medium rounded-xl hover:bg-gold-dark transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}