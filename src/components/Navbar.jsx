import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
  { code: 'te', label: 'తె' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/our-vision', label: 'Vision' },
    { path: '/about', label: t('nav.about') },
    { path: '/journey', label: t('nav.journey') },
    { path: '/launch-stations', label: 'Stations' },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-2xl border-b border-black/[0.03] py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-4 group relative">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <img 
                  src={logo} 
                  alt="SADHACHAAR Logo" 
                  className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full shadow-lg" 
                />
                <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-heading text-lg md:text-xl font-bold text-charcoal tracking-[0.12em]">
                  SADHACHAAR
                </span>
                <span className="text-[8px] tracking-[0.3em] text-gold-dark font-bold uppercase -mt-1 opacity-90">
                  Human Operating System
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-500 group ${
                    location.pathname === item.path
                      ? 'text-gold'
                      : 'text-muted hover:text-charcoal'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname === item.path ? (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gold/5 rounded-lg border-b-2 border-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-50/0 group-hover:bg-gray-50/100 rounded-lg scale-90 group-hover:scale-100 transition-all duration-300" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-1 bg-black/[0.03] backdrop-blur-md rounded-full p-1 border border-black/[0.05]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-1.5 text-[10px] font-bold rounded-full transition-all duration-500 ${
                      i18n.language === lang.code
                        ? 'bg-gold text-white shadow-gold'
                        : 'text-muted hover:text-charcoal'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-black/[0.03] hover:bg-black/[0.05] transition-colors"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="w-5 h-4 flex flex-col justify-between"
                >
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-charcoal origin-center transition-all"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    className="w-full h-0.5 bg-charcoal"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-charcoal origin-center transition-all"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 px-6 rounded-2xl text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'bg-gold text-white shadow-gold'
                            : 'text-charcoal hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-100"
                >
                  <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4 px-2">Select Language</p>
                  <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`py-3 text-xs font-bold rounded-xl transition-all duration-300 ${
                          i18n.language === lang.code
                            ? 'bg-gold text-white shadow-gold'
                            : 'bg-gray-100 text-muted'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}