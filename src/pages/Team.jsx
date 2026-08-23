import { motion } from 'framer-motion';
import advisoryImg1 from '../assets/advisory_img_1.png';
import advisoryImg2 from '../assets/advisory_img_2.png';
import advisoryImg3 from '../assets/advisory_img_3.png';
import advisoryImg4 from '../assets/advisory_img_4.png';
import advisoryImg5 from '../assets/advisory_img_5.png';
import advisoryImg6 from '../assets/advisory_img_6.png';
import advisoryImg7 from '../assets/advisory_img_7.png';
import advisoryImg8 from '../assets/advisory_img_8.png';
import FounderJourney from '../components/FounderJourney';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
};

const advisoryTeam = [
  {
    img: advisoryImg1,
    name: 'Group Captain (Retd) Ashwani Bhakoo',
    credentials: [
      'Vishisht Seva Medal (VSM) – Indian Air Force',
      'Pilot, Psychotherapist, Aviation Consultant'
    ]
  },
  {
    img: advisoryImg2,
    name: 'Mr. Varadarajan',
    credentials: [
      'MSc, M.Phil (Mathematics)',
      '30+ yrs Serving Education Industry',
      'Teacher, Motivator, Entrepreneur Champion'
    ]
  },
  {
    img: advisoryImg3,
    name: 'Dr. N.S. Ramachandra Murthy',
    credentials: [
      'Retd. Director Archaeology and Museum',
      'India'
    ]
  },
  {
    img: advisoryImg4,
    name: 'Mrs. Sarada Nanduri',
    credentials: [
      'Music Teacher',
      'MA (Carnatic Music Vocal)',
      'Diploma (Veena & Light Music)'
    ]
  },
  {
    img: advisoryImg5,
    name: 'Prof. Abul Kalam',
    credentials: [
      'Head – Department of Urdu',
      'School of Languages, Linguistics & Indology',
      'Maulana Azad National Urdu University'
    ]
  },
  {
    img: advisoryImg6,
    badge: 'First Person to step on Mission : Suvarna Avirbha (2018)',
    name: 'Mr. Siva Prasad Kavirayuni',
    credentials: [
      'Hyderabad – TS – IND',
      'IT Project Manager with 22+ years of Experience',
      'Co-Founder @ Mission Sadha'
    ]
  },
  {
    img: advisoryImg7,
    badge: 'First Person to step on Mission : Sadha (SAtya DHArm) (2022)',
    name: 'Mr. Tadkeshwar Prasad',
    credentials: [
      'Varanasi – UP – IND',
      'Daily Worker',
      'Executive Member @ Mission Sadha'
    ]
  }
];

export default function Team() {
  return (
    <div className="overflow-x-clip">
      <section className="relative bg-deepCharcoal text-white overflow-x-clip">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-deepCharcoal to-deepNavy" />
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-gold/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.45fr)] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
                  <div className="absolute -inset-8 rounded-[2.5rem] bg-gold/10 blur-2xl" />
                  <img
                    src={advisoryImg8}
                    alt="Ryali Venkata Soma Suresh"
                    className="relative w-full aspect-[4/5] object-cover rounded-[1.65rem] border-2 border-gold/50 shadow-2xl"
                  />
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold text-charcoal px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase shadow-gold">
                    Founder of the Missions
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="pt-4"
            >
              <span className="premium-badge !border-gold/30 !bg-gold/10 !text-gold-light mb-7">Founder's Story</span>
              <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-[1.08] text-white mb-5">
                Ryali Venkata Soma Suresh
              </h1>
              <p className="text-gold-light text-sm md:text-base font-semibold tracking-[0.08em] uppercase leading-relaxed mb-8">
                Founder • Researcher • Enterprise Transformation Leader • Creator of Satya Dharm
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-gold-light leading-snug mb-7">
                From a Promise Made in 2004 to a New Possibility for Humanity
              </h2>

              <div className="space-y-6 text-gray-300 text-[1.05rem] leading-relaxed">
                <p>
                  Ryali Venkata Soma Suresh is the Founder behind a journey that began in 2004 as Mission 2020, evolved into Mission Suvarna Avirbha, became Mission Sadha, and today continues its next chapter through Sadhachaar Consulting Services.
                </p>
                <p>
                  His journey is not merely the story of building an organization. It is the story of pursuing a question for more than two decades: What if the deepest problems of human life could be approached through an indigenous knowledge system that helps people understand their own potential, their commitments, their responsibilities and their relationships?
                </p>
                <p>
                  That question became a lifelong research journey. And that journey led to what he calls <span className="text-gold-light font-semibold">Satya Dharm</span>.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-gold/25">
                <span className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase">The Beginning</span>
                <h3 className="font-heading text-2xl md:text-3xl text-white mt-3 mb-6">A Promise to the Nation</h3>
                <div className="space-y-6 text-gray-300 text-[1.05rem] leading-relaxed">
                  <p>
                    On 26 January 2004, during the Republic Day NCC Camp in New Delhi, a young NCC cadet from Andhra Pradesh encountered the national call to think beyond the present and stand for the future. Without knowing exactly how, he made a commitment: <span className="text-white font-semibold">Do something for the Nation.</span>
                  </p>
                  <p>
                    That commitment became Mission 2020. Its foundational principle was simple:
                  </p>
                  <p className="inline-block border-y border-gold/40 py-4 text-gold-light font-heading text-xl md:text-2xl tracking-wide">
                    TARGET ALL • BENEFIT ALL
                  </p>
                  <p>
                    The mission began by studying the AS-IS reality and continuously searching for a stronger TO-BE possibility aligned with the belief that progress should not be limited to a few. What began as a personal commitment gradually became a long-term research and innovation journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="premium-badge mb-6">Our People</span>
            <h2 className="text-heading-2 mb-4">The Architects of Sadhachaar</h2>
            <p className="text-gold font-semibold text-lg mb-6">22 Years of Heart, Science, and Shared Purpose.</p>
            <p className="text-muted text-lg leading-relaxed">
              Behind Mission Sadha is a collective of researchers, leaders, and cultural strategists who have spent over two decades mapping the landscape of human happiness. From understanding the core of organizational maturity to designing transformative pre-marriage initiatives like The Golden Union, our team has been the driving force of this movement since 2004.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-heading-3 mb-3">Advisory Leadership Team</h3>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advisoryTeam.map((member, index) => (
              <motion.div key={index} variants={item}>
                <div className="premium-card h-full flex flex-col items-center text-center group">
                  {member.badge && (
                    <span className="premium-badge mb-4 text-center leading-relaxed normal-case tracking-normal text-[11px] px-3 py-1">
                      {member.badge}
                    </span>
                  )}
                  <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden border-2 border-gold/40 shadow-gold transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-charcoal font-heading font-semibold text-xl mb-3 leading-snug">
                    {member.name}
                  </h4>
                  <div className="space-y-1">
                    {member.credentials.map((line, i) => (
                      <p key={i} className="text-muted text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FounderJourney />

      <section className="relative py-20 md:py-24 px-6 md:px-12 bg-gradient-to-b from-midnight via-deepNavy to-midnight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl text-gold-light mb-4">Our Sincere Gratitude</h3>
          <p className="text-ivory/90 text-lg leading-relaxed mb-8">
            To all unsung personalities living Ordinary Life with Exceptional Commitment, Standing for Our Future on SATYA &amp; DHARM…
          </p>
          <div className="bg-white/5 border border-gold/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <p className="font-heading text-xl md:text-2xl text-gold-light leading-relaxed">
              Satya Vakya Paripalan &nbsp;–&nbsp; Dharmo Rakshati Rakshitaha
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
