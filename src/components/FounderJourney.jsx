import { motion } from 'framer-motion';

const resetMethodology = [
  { letter: 'R', title: 'Realize your Potential', desc: 'Psychometry based on culture.' },
  { letter: 'E', title: 'Engage your Skill', desc: 'Discover your blind spots.' },
  { letter: 'S', title: 'Serve', desc: 'Demonstrate highest performance.' },
  { letter: 'E', title: 'Evolve on the Go', desc: 'Unleash power during learning.' },
  { letter: 'T', title: 'Transform Continuously', desc: 'Discover your Ultimate Source.' }
];

const satyaFactors = ['Self-expression', 'Efficiency', 'Effectiveness', 'Integrity', 'Relationships', 'Existence', 'Inspiration'];

const dharmDimensions = ['Doer', 'Thinker', 'Creator', 'Helper', 'Persuader', 'Organizer'];

const dharmFoundations = ['Moral', 'Economic', 'Lifestyle', 'Cultural'];

const itemsDimensions = ['Worth', 'Trust', 'Talent', 'Background', 'Personal Responsibility', 'Family', 'Relationships', 'Community', 'Society', 'Organization', 'Country / Humanity'];

const researchPattern = ['Observe', 'Research', 'Design', 'Test', 'Measure', 'Learn', 'Evolve'];

const researchMethods = [
  'Assessments',
  'Surveys & Scorecards',
  'Focus Groups',
  'Market Research',
  'Targeted Surveys',
  'Multi-level Surveys',
  'Targeted Interviews',
  'Multi-level Interviews'
];

const credentials = ['MSc Physics', '20+ Years Experience', 'SAFe SPC', 'POPM', 'RTE', 'SSM', 'IBM Data Science', 'ISO 9001:2015 Auditor', 'Lean Six Sigma Trainer'];

const professionalDomains = [
  'Enterprise Transformation',
  'Agile',
  'Program Management',
  'Project Management',
  'Business Analysis',
  'Quality Engineering',
  'Healthcare',
  'Banking',
  'Finance',
  'e-Commerce',
  'Education',
  'Airlines'
];

const documentedResults = [
  { value: '35%', label: 'Improvement in delivery predictability' },
  { value: '3 → 48+', label: 'Enterprise Operating Model scaled across teams' },
  { value: '40%', label: 'Reduction in intake-to-start cycle time' },
  { value: '2-Level', label: 'Maturity improvement' },
  { value: '30%', label: 'Improvement in decision turnaround' },
  { value: '25%', label: 'Increase in delivery throughput' },
  { value: '20%', label: 'Reduction in work-in-progress' },
  { value: '90%', label: 'Adoption of outcome-tracking practices' },
  { value: '30%', label: 'Reduction in cross-region dependency delays' }
];

const founderIntersection = [
  { domain: 'Science', desc: 'Physics, data, measurement and structured inquiry.' },
  { domain: 'Technology', desc: 'Digital transformation, Agile, enterprise operating models and emerging technology.' },
  { domain: 'Management', desc: 'Strategy, governance, value management, program delivery and organizational transformation.' },
  { domain: 'Research', desc: 'More than two decades of independent exploration, field research, experimentation and iteration.' },
  { domain: 'Culture', desc: 'Indian cultural knowledge, traditional arts, values and the concepts of Satya and Dharm.' },
  { domain: 'Human Development', desc: 'Potential, responsibility, capability, relationships, happiness and sustainable growth.' }
];

const consultingCapabilities = [
  'Enterprise Transformation',
  'Agile & Operating Models',
  'Strategic Advisory',
  'Research & Innovation',
  'Human Capability',
  'Satya Dharm',
  'Cultural Intelligence',
  'Technology',
  'Sustainable Development'
];

const legacyChain = [
  'NCC Promise — 2004',
  'Mission 2020',
  'Mission Suvarna Avirbha',
  'Two Decades of Research',
  'Field Experimentation Across India',
  'Varanasi',
  'Mission Sadha',
  'Satya Dharm',
  'Sadhachaar Consulting Services'
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7 }
};

function Chapter({ number, title, children }) {
  return (
    <motion.div {...fadeUp} className="max-w-5xl mx-auto mb-24 md:mb-32 last:mb-0">
      <div className="flex items-start gap-5 md:gap-8 mb-8 md:mb-10">
        <span className="font-heading text-5xl md:text-7xl font-semibold leading-none text-gold/15 select-none">
          {number}
        </span>
        <div className="pt-1">
          <span className="block text-[11px] font-bold tracking-[0.22em] text-gold uppercase mb-2">
            Chapter {number}
          </span>
          <h2 className="font-heading text-2xl md:text-4xl text-white leading-tight">{title}</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-transparent mt-4" />
        </div>
      </div>
      <div className="md:pl-16 lg:pl-24 space-y-6 text-gray-300 text-[1.02rem] md:text-[1.05rem] leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-1.5 text-xs md:text-sm text-gold-light tracking-wide whitespace-nowrap">
      {children}
    </span>
  );
}

function HighlightBanner({ children }) {
  return (
    <div className="text-center py-4">
      <p className="inline-block border-y-2 border-gold/50 py-4 px-6 md:px-10 font-heading text-xl md:text-2xl text-gold-light tracking-wide text-center">
        {children}
      </p>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase mb-4">{children}</p>
  );
}

export default function FounderJourney() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-midnight via-deepNavy to-midnight text-white section-padding">
      <div className="absolute top-40 left-0 w-[28rem] h-[28rem] rounded-full bg-gold/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-64 right-0 w-[26rem] h-[26rem] rounded-full bg-gold/[0.05] blur-3xl pointer-events-none" />

      <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center mb-20 md:mb-28">
        <span className="premium-badge !border-gold/30 !bg-gold/10 !text-gold-light mb-6">The Founder's Journey</span>
        <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mt-6 mb-5">
          Two Decades of Research. <br className="hidden md:block" />
          One Unwavering Idea.
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The journey continued far beyond a promise made in 2004 — through missions,
          milestones, frameworks and thousands of kilometres of fieldwork.
        </p>
      </motion.div>

      <div className="relative">
        <Chapter number="01" title="From Mission 2020 to Mission Suvarna Avirbha">
          <p>
            In 2012, the emerging global conversation around happiness and human well-being created
            a new direction for the mission. Mission 2020 evolved into{' '}
            <span className="text-gold-light font-semibold">Mission Suvarna Avirbha</span> with an expanding vision:
          </p>
          <HighlightBanner>WORLD HAPPINESS INDEX — INDIA #1</HighlightBanner>
          <p>
            The research began looking beyond conventional economic measures and exploring the relationship
            between culture, technology, education, human capability and happiness.
          </p>
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            <div className="rounded-2xl border border-gold/15 bg-white/[0.04] p-6">
              <span className="font-heading text-3xl text-gold-light">2016</span>
              <p className="mt-3 text-gray-300 leading-relaxed">
                The research was also studying work around sustainable development, education, gender and
                technology — including reference to the Earth Institute / Columbia University study on a
                women-led ICT centre in Mahbubnagar, Telangana.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/15 bg-white/[0.04] p-6">
              <span className="font-heading text-3xl text-gold-light">2019</span>
              <p className="mt-3 text-gray-300 leading-relaxed">
                The mission was publicly presenting its framework and developing the R-E-S-E-T Methodology,
                using a &ldquo;Voice of Public&rdquo; approach — surveys, assessments and multi-level interviews —
                to test ideas with people rather than developing them only in theory.
              </p>
            </div>
          </div>
        </Chapter>

        <Chapter number="02" title="The Turning Point — Discovering Satya Dharm">
          <p>
            The COVID-19 period placed the mission on hold. <span className="text-white font-medium">But the research did not stop.</span>
          </p>
          <p>
            Following the introduction of NEP 2020, the research identified a new possibility:{' '}
            <span className="text-gold-light font-semibold">Informative &amp; Transformative Education on Satya &amp; Dharm</span>.
            The Mission Sadha document describes this as a primary, unearthed education derived from Indian cultural
            knowledge, intended to contribute to sustainable development and aligned with the direction of India's New
            Education Policy.
          </p>
          <p>
            In 2022, the research entered a dedicated test phase. Soma travelled extensively — the Mission Sadha
            documentation records approximately <span className="text-gold-light font-semibold">40,000 KM</span> of travel
            across much of India in search of an appropriate environment in which to conduct experiments. That environment
            was identified as:
          </p>
          <HighlightBanner>VARANASI — UTTAR PRADESH</HighlightBanner>
          <p>
            The mission then conducted experiments intended to explore sustainable development and growth at the
            individual and family level. On <span className="text-white font-medium">1 June 2022</span>, the initiative emerged as:
          </p>
          <HighlightBanner>
            MISSION SADHA
            <span className="block text-sm md:text-base tracking-[0.18em] text-gold mt-2 font-body font-semibold">
              WITH THE CONTINUING VISION — WORLD HAPPINESS INDEX · INDIA #1
            </span>
          </HighlightBanner>
        </Chapter>

        <Chapter number="03" title="The Discovery — Satya Dharm">
          <p>At the heart of Soma's research is a reinterpretation of two foundational concepts.</p>
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="rounded-3xl border border-gold/20 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 flex flex-col">
              <h3 className="font-heading text-2xl md:text-3xl text-gold-light mb-2">SATYA</h3>
              <p className="italic text-gray-400 text-sm mb-4">Not merely &ldquo;truth&rdquo;.</p>
              <p className="leading-relaxed mb-5">
                Within the Mission Sadha framework, Satya is connected to knowing, doing and being one's own word —
                treating one's word as a source of accountability, trust and personal integrity.
              </p>
              <ul className="space-y-2 mb-5 text-gray-200">
                <li className="flex gap-3"><span className="text-gold">◆</span><span><strong className="text-gold-light font-semibold">Performance</strong> — Worthiness</span></li>
                <li className="flex gap-3"><span className="text-gold">◆</span><span><strong className="text-gold-light font-semibold">Pillars of Life</strong> — Trust Source</span></li>
              </ul>
              <SectionLabel>Key Factors</SectionLabel>
              <div className="flex flex-wrap gap-2 mt-auto">
                {satyaFactors.map((f) => <Chip key={f}>{f}</Chip>)}
              </div>
            </div>
            <div className="rounded-3xl border border-gold/20 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 flex flex-col">
              <h3 className="font-heading text-2xl md:text-3xl text-gold-light mb-2">DHARM</h3>
              <p className="italic text-gray-400 text-sm mb-4">Not merely religion.</p>
              <blockquote className="border-l-2 border-gold/50 pl-4 my-4 text-gold-light font-heading text-lg md:text-xl leading-snug">
                &ldquo;An authentic way of discharging one's own Duty with utmost sincerity.&rdquo;
              </blockquote>
              <ul className="space-y-2 mb-5 text-gray-200">
                <li className="flex gap-3"><span className="text-gold">◆</span><span><strong className="text-gold-light font-semibold">Skill</strong> — Talent</span></li>
                <li className="flex gap-3"><span className="text-gold">◆</span><span><strong className="text-gold-light font-semibold">Corners of Life</strong> — Background Source</span></li>
              </ul>
              <SectionLabel>Dimensions &amp; Foundations</SectionLabel>
              <div className="flex flex-wrap gap-2 mt-auto">
                {dharmDimensions.map((d) => <Chip key={d}>{d}</Chip>)}
                {dharmFoundations.map((f) => (
                  <Chip key={f}>{f} Foundation</Chip>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center pt-2">
            <span className="text-gold-light font-heading text-xl md:text-2xl">
              Together, SATYA + DHARM become the foundation of the proposed human development framework.
            </span>
          </p>
        </Chapter>

        <Chapter number="04" title="From Philosophy to a System">
          <p>
            One of the distinctive aspects of Soma's work is the attempt to move the conversation from philosophy
            into <span className="text-white font-medium">measurement, methodology and application</span>.
          </p>
          <div className="rounded-2xl border border-gold/25 bg-gold/[0.05] p-6 md:p-8">
            <span className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase">The Proposed System</span>
            <h3 className="font-heading text-xl md:text-2xl text-gold-light mt-2 mb-3">
              Informative &amp; Transformative Education Management System — ITEMS
            </h3>
            <p className="leading-relaxed">
              Built around Indian cultural knowledge and technology, ITEMS is positioned as a management and education
              system intended to connect information, transformation, measurement and human development.
            </p>
          </div>
          <div className="pt-2">
            <SectionLabel>Happiness Explored Through Measurable Dimensions</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {itemsDimensions.map((d) => <Chip key={d}>{d}</Chip>)}
            </div>
          </div>
          <p>
            The documentation explicitly proposes that happiness is directly related to Satya and Dharm, and describes
            these elements as simple and measurable within the Mission Sadha framework.
          </p>
        </Chapter>

        <Chapter number="05" title="The R-E-S-E-T Methodology">
          <p>
            Another major element developed through the research — a practical pathway for individuals to explore
            potential, identify capability gaps and continuously transform.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
            {resetMethodology.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gold/15 bg-white/[0.04] p-6 text-center transition-colors duration-500 hover:border-gold/40 hover:bg-gold/[0.07]">
                <span className="font-heading text-5xl text-gold block mb-3">{step.letter}</span>
                <h4 className="text-white font-semibold text-sm md:text-base leading-snug mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter number="06" title="From Research to Education">
          <p>
            The research was not intended to remain a concept. Mission Sadha developed a{' '}
            <span className="text-gold-light font-semibold">42-hour Primary Education / Workshop on Satya Dharm</span>{' '}
            for people above 12 years of age within its proposed education framework.
          </p>
          <p>
            The documentation also connects the approach with the <span className="text-white font-medium">5+3+3+4 structure of NEP 2020</span>,
            proposing ways in which Satya Dharm concepts could be introduced through developmental stages and
            parent/teacher observations.
          </p>
          <div className="rounded-2xl border-y border-gold/40 bg-white/[0.02] py-8 px-6 text-center">
            <p className="font-heading text-xl md:text-2xl text-gold-light leading-relaxed max-w-3xl mx-auto">
              Not simply to educate people about culture — but to help people discover how culture can become a living capability.
            </p>
          </div>
        </Chapter>

        <Chapter number="07" title="The Researcher Who Tested the Idea">
          <p>Soma's work is distinguished by a recurring pattern:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 py-3">
            {researchPattern.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-1.5 text-xs md:text-sm text-gold-light tracking-wide font-medium">
                  {step}
                </span>
                {i < researchPattern.length - 1 && <span className="text-gold/60">→</span>}
              </span>
            ))}
          </div>
          <div className="pt-2">
            <SectionLabel>Recorded Methods of Inquiry</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {researchMethods.map((m) => <Chip key={m}>{m}</Chip>)}
            </div>
          </div>
          <p>
            The documentation also records a proof-of-concept journey, including participants completing the 42-hour
            Satya Dharm education. This is important to the Founder story:
          </p>
          <div className="rounded-2xl border-y border-gold/40 bg-white/[0.02] py-8 px-6 text-center">
            <p className="font-heading text-xl md:text-2xl text-gold-light leading-relaxed max-w-3xl mx-auto">
              The idea was not intended to remain an idea. It was taken into the field.
            </p>
          </div>
        </Chapter>

        <Chapter number="08" title="The Professional Engineering Behind the Vision">
          <p>
            The Founder journey is strengthened by a parallel professional career spanning more than two decades.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            {credentials.map((c) => <Chip key={c}>{c}</Chip>)}
          </div>
          <p>
            His career has included roles across:{' '}
            <span className="text-gray-200">{professionalDomains.join(' • ')}</span>
          </p>
          <p>
            Most recently, as an <span className="text-gold-light font-semibold">Enterprise Agile Coach / Senior Advisor</span>,
            he led enterprise-wide Agile and Operating Model transformation. The documented results include:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {documentedResults.map((r) => (
              <div key={r.label} className="rounded-2xl border border-gold/15 bg-white/[0.04] p-5 text-center">
                <span className="font-heading text-2xl md:text-3xl text-gold-light block mb-2">{r.value}</span>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-gold/25 bg-gold/[0.05] p-6 md:p-8">
            <p className="leading-relaxed">
              This creates a powerful bridge between two worlds:{' '}
              <span className="text-gold-light font-semibold">Enterprise Transformation</span> and{' '}
              <span className="text-gold-light font-semibold">Human Transformation</span>. The same discipline used to
              transform complex organizations — understanding the current state, defining a future state, identifying
              measurable outcomes, enabling people and continuously improving — became part of the philosophy behind the
              larger Mission journey.
            </p>
          </div>
        </Chapter>

        <Chapter number="09" title="The Founder's Unique Position">
          <p>Soma is therefore not best described by a single professional title. He stands at the intersection of:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {founderIntersection.map((i) => (
              <div key={i.domain} className="rounded-2xl border border-gold/15 bg-white/[0.04] p-6 transition-colors duration-500 hover:border-gold/40 hover:bg-gold/[0.07]">
                <h4 className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase mb-3">{i.domain}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
          <p>This intersection is what makes the Founder story distinctive.</p>
        </Chapter>

        <Chapter number="10" title="What He Is Trying To Unleash">
          <div className="rounded-3xl border border-gold/25 bg-gold/[0.05] p-8 md:p-10 text-center">
            <p className="font-heading text-2xl md:text-3xl text-white leading-relaxed">
              Human beings may be capable of more than the systems around them have taught them to believe.
            </p>
          </div>
          <p>
            The Mission Sadha framework proposes that understanding one's Satya and Dharm can become a pathway to
            discovering potential, strengthening accountability, developing skills and improving the quality of life.
          </p>
          <p>
            Its stated philosophy is that every individual is unique and exceptional and should not be reduced to
            comparison with another person.
          </p>
          <div className="text-center pt-2">
            <h3 className="font-heading text-2xl md:text-3xl text-gold-light tracking-wide mb-4">UNLEASHING NEW LIMITS</h3>
            <p className="max-w-2xl mx-auto leading-relaxed">
              Not breaking limits for the sake of achievement — but discovering whether the limits themselves
              were ever truly understood.
            </p>
          </div>
        </Chapter>

        <Chapter number="11" title="Today — Sadhachaar Consulting Services">
          <p>
            The next chapter of the journey is{' '}
            <span className="text-gold-light font-heading text-xl md:text-2xl">Sadhachaar Consulting Services</span>.
            Here, the Founder brings together the capabilities accumulated across his professional and research life:
          </p>
          <div className="flex flex-wrap gap-3 py-1">
            {consultingCapabilities.map((c) => <Chip key={c}>{c}</Chip>)}
          </div>
          <p>
            The ambition is no longer restricted to one project, one organization or one industry. It is to create a
            platform where deep research, professional transformation experience and indigenous knowledge can meet the
            problems of a rapidly changing world.
          </p>
        </Chapter>

        <Chapter number="12" title="A Founder's Legacy in the Making">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 py-2">
            {legacyChain.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className={`rounded-full px-4 py-1.5 text-xs md:text-sm tracking-wide font-medium ${i === legacyChain.length - 1 ? 'bg-gold text-charcoal font-bold' : 'border border-gold/25 bg-gold/[0.07] text-gold-light'}`}>
                  {step}
                </span>
                {i < legacyChain.length - 1 && <span className="text-gold/60">→</span>}
              </span>
            ))}
          </div>
          <p className="text-center !text-base">
            …the journey has remained anchored in one idea:
          </p>
          <HighlightBanner>TARGET ALL · BENEFIT ALL</HighlightBanner>
          <p className="text-center">
            The Founder did not begin with a finished answer. He began with a commitment. He researched. He questioned.
            He travelled. He tested. He measured. He evolved.
          </p>
          <p className="text-center">
            And he continues to ask what becomes possible when Indian knowledge, human capability, technology and modern
            transformation thinking are brought together.
          </p>
        </Chapter>

        <Chapter number="13" title="The Founder's Declaration">
          <div className="relative rounded-3xl border border-gold/25 bg-white/[0.03] backdrop-blur-sm p-8 md:p-12">
            <span className="absolute -top-6 left-8 font-heading text-8xl text-gold/25 select-none leading-none">&ldquo;</span>
            <div className="space-y-5 text-gray-200 leading-relaxed">
              <p className="font-heading text-xl md:text-2xl text-white leading-relaxed">
                I did not set out to create another methodology. I set out to understand what we may have forgotten
                about ourselves.
              </p>
              <p>
                For more than two decades, I have explored the intersection of human potential, Indian culture,
                technology, transformation and happiness.
              </p>
              <p>
                Mission 2020 gave the journey a direction. Mission Suvarna Avirbha gave it a larger purpose.
                Mission Sadha gave the research a framework through Satya Dharm. And Sadhachaar is the next platform
                through which that learning can be taken forward.
              </p>
              <p>
                I believe the future does not require us to choose between culture and technology, tradition and
                innovation, humanity and performance. We can build the future by understanding our source.
              </p>
              <div className="py-4 text-center space-y-1">
                <p className="text-gold-light font-semibold"><span className="text-gold">Satya</span> — Be your Word.</p>
                <p className="text-gold-light font-semibold"><span className="text-gold">Dharm</span> — Be authentic to your Duty.</p>
                <p className="text-white font-medium pt-2">And then: Discover your Ultimate Source.</p>
              </div>
              <p className="text-center font-heading text-lg md:text-xl text-gold-light">
                That is the journey. That is the research.<br />
                That is the possibility. <span className="text-white">That is Sadhachaar.</span>
              </p>
            </div>
          </div>

          <div className="text-center pt-14 pb-2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent mx-auto mb-8" />
            <p className="font-heading text-2xl md:text-3xl text-white tracking-wide">RYALI VENKATA SOMA SURESH</p>
            <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase mt-3">Founder &amp; Researcher</p>
            <p className="text-gray-400 text-sm mt-3">
              Mission 2020 <span className="text-gold/50 mx-1">•</span> Mission Suvarna Avirbha <span className="text-gold/50 mx-1">•</span> Mission Sadha
            </p>
            <p className="text-gold-light text-sm font-semibold mt-1">Founder — Sadhachaar Consulting Services</p>
            <div className="mt-8 space-y-1 text-gray-400 text-sm italic">
              <p>A journey from commitment to research.</p>
              <p>From research to discovery.</p>
              <p>From discovery to transformation.</p>
              <p>From transformation to a possibility for the world.</p>
            </div>
            <p className="font-heading text-3xl md:text-4xl text-gold-light tracking-[0.08em] mt-10">SATYA DHARM</p>
            <p className="text-[11px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase mt-3">
              Unleash Your Ultimate Source
            </p>
          </div>
        </Chapter>
      </div>
    </section>
  );
}
