import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo.png';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deepCharcoal text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-dark/5 rounded-full blur-[100px] pointer-events-none opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Community Dashboard - Re-aligned for Elegance */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-10">
              {/* Header Row */}
              <Link to="/" className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={logo} alt="Sadhachaar" className="h-16 w-16 object-contain rounded-full relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-bold tracking-[0.1em] text-white">SADHACHAAR</span>
                  <span className="text-[9px] tracking-[0.4em] text-gold font-bold uppercase -mt-1">Human Operating System</span>
                </div>
              </Link>

              {/* Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
                {/* Mission & Quote */}
                <div className="space-y-8">
                  <p className="text-silver text-sm leading-relaxed opacity-80">
                    Pioneering the world's first indigenous human operating system for sustainable happiness and societal harmony.
                  </p>
                  <div className="p-5 rounded-2xl bg-gold/5 border border-gold/10 relative overflow-hidden group/quote">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold/30" />
                    <p className="text-[11px] text-gold/80 italic font-medium leading-relaxed">
                      "Happiness is a foundation, not an achievement."
                    </p>
                  </div>
                </div>

                {/* Engagement & Socials */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-5">Join Our Community</h4>
                    <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Email address" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-5 text-xs text-white focus:outline-none focus:border-gold/50 transition-all duration-300"
                      />
                      <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-gold text-charcoal text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-gold-light transition-all duration-300">
                        Join
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/50 mb-5">Connect</h4>
                    <div className="flex gap-4">
                      {[
                        { 
                          label: 'Facebook', 
                          url: 'https://www.facebook.com/share/14bMJ4h7N2k/',
                          icon: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        },
                        { 
                          label: 'Instagram', 
                          url: 'https://www.instagram.com/somuprime?igsh=MXFoOW9hNHF4YmFpaw==',
                          icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        },
                        { 
                          label: 'Instagram', 
                          url: 'https://www.instagram.com/somuprime?igsh=MXFoOW9hNHF4YmFpaw==',
                          icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        },
                        { 
                          label: 'LinkedIn', 
                          url: 'https://www.linkedin.com/in/somaryali',
                          icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        },
                        { 
                          label: 'YouTube', 
                          url: 'https://youtube.com/@sadhachaarlokvidya?si=WOflItv3sgQSwmg2',
                          icon: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                        }
                      ].map((social) => (
                        <a 
                          key={social.label} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-silver hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            {social.icon}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Vision', path: '/our-vision' },
                { name: 'About', path: '/about' },
                { name: 'Journey', path: '/journey' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-silver hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gold/0 group-hover:bg-gold rounded-full transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Section */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-8">Launch Stations</h4>
            <ul className="space-y-4">
              {['Family', 'Workspace', 'Community', 'Society', 'Humanity'].map((station) => (
                <li key={station}>
                  <Link to="/launch-stations" className="text-sm text-silver hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gold/0 group-hover:bg-gold rounded-full transition-all duration-300" />
                    {station} Station
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-bold text-silver opacity-40 tracking-[0.3em] uppercase">
            © {currentYear} SADHACHAAR HUMAN OPERATING SYSTEM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-10 text-[9px] font-bold text-silver opacity-40 tracking-[0.3em] uppercase">
            <Link to="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors duration-300">Terms of Service</Link>
            <Link to="#" className="hover:text-gold transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}