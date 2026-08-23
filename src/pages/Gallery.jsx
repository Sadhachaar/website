import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import inspirationImage from '../assets/inspiration_img.png';

const galleryCollections = [
  { id: 'm2020', step: '01', title: 'M2020', description: 'The beginnings of our research, learning, and human-development journey.', folderId: '1XuUyd_4ewMyoAumSjs1jJ9LCEjGCYGao' },
  { id: 'suvarna-avirbhha', step: '02', title: 'Mission Suvarna Avirbha', description: 'Moments from a mission shaped by transformation, shared purpose, and possibility.', folderId: '18evkzRNG7tt6KlU_gCxjdGUlqQuFNh7g' },
  { id: 'mission-sadha', step: '03', title: 'Mission Sadha Co SADHACHAAR', description: 'The continuing story of SADHACHAAR and its commitment to SATYA and DHARM.', folderId: '1efnxkNTapxelGCwPPSw0QrHNz9pLDxdd' }
];

export default function Gallery() {
  const [activeCollection, setActiveCollection] = useState(galleryCollections[0]);
  const folderUrl = `https://drive.google.com/drive/folders/${activeCollection.folderId}`;
  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${activeCollection.folderId}#grid`;

  return (
    <div className="overflow-x-hidden bg-ivory">
      <section className="section-padding pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,139,63,0.12),_transparent_52%)]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto text-center relative">
          <span className="premium-badge mb-6">Visual Archive</span>
          <h1 className="text-heading-2 mb-5">A Journey Captured in <span className="text-gold italic">Purpose</span></h1>
          <p className="text-gold font-semibold text-lg mb-6">22 Years of Research, Relationships, and Transformation.</p>
          <p className="text-muted text-lg leading-relaxed">Explore the defining moments of our journey across M2020, Mission Suvarna Avirbha, and Mission Sadha Co SADHACHAAR.</p>
        </motion.div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-16 overflow-hidden rounded-3xl border border-gold/30 bg-charcoal p-2 shadow-premium"
          >
            <img
              src={inspirationImage}
              alt="Our inspiration for Lok Vidya since 2003: Atal Bihari Vajpayee, Abdul Kalam, and Nara Chandra Babu Naidu"
              loading="lazy"
              className="w-full h-auto rounded-[1.35rem]"
            />
          </motion.figure>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
            {galleryCollections.map((collection) => {
              const isActive = activeCollection.id === collection.id;
              return <button key={collection.id} type="button" onClick={() => setActiveCollection(collection)} className={`text-left rounded-2xl border p-5 transition-all duration-300 ${isActive ? 'bg-charcoal border-charcoal text-white shadow-premium' : 'bg-white border-gold/15 text-charcoal hover:border-gold/60 hover:-translate-y-1'}`} aria-pressed={isActive}>
                <span className={`text-xs font-bold tracking-[0.25em] ${isActive ? 'text-gold-light' : 'text-gold-dark'}`}>{collection.step}</span>
                <span className="block mt-2 font-heading text-xl font-semibold leading-snug">{collection.title}</span>
              </button>;
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCollection.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }} className="premium-card p-0 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-6 md:p-8 border-b border-gold/10 bg-white">
                <div>
                  <span className="text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">Chapter {activeCollection.step}</span>
                  <h2 className="text-2xl md:text-3xl text-charcoal mt-2">{activeCollection.title}</h2>
                  <p className="text-muted text-base mt-2 max-w-2xl">{activeCollection.description}</p>
                </div>
                <a href={folderUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0">Open in Drive <span aria-hidden="true" className="ml-2">↗</span></a>
              </div>
              <div className="bg-softWhite p-2 md:p-4">
                <iframe key={embedUrl} src={embedUrl} title={`${activeCollection.title} gallery`} className="w-full h-[560px] md:h-[680px] bg-white rounded-xl border-0" loading="lazy" allow="fullscreen" />
              </div>
            </motion.div>
          </AnimatePresence>
          <p className="text-center text-muted text-sm mt-8">Gallery content is maintained in Google Drive and updates automatically when new media is added to these folders.</p>
        </div>
      </section>

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
