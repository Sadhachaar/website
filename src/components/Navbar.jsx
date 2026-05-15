import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

export default function Navbar() {
  const { t } = useTranslation();
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
    { path: '/team', label: 'Team' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/contact', label: t('nav.contact') }
  ];

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

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                {[
                  { label: 'Facebook', url: 'https://www.facebook.com/share/14bMJ4h7N2k/', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
                  { label: 'Instagram', url: 'https://www.instagram.com/somuprime?igsh=MXFoOW9hNHF4YmFpaw==', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/somaryali', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                  { label: 'YouTube', url: 'https://youtube.com/@sadhachaarlokvidya?si=WOflItv3sgQSwmg2', icon: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /> }
                ].map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/[0.03] flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
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
                  <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4 px-2">Follow Us</p>
                  <div className="flex gap-3 justify-center">
                    {[
                      { label: 'Facebook', url: 'https://www.facebook.com/share/14bMJ4h7N2k/', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
                      { label: 'Instagram', url: 'https://www.instagram.com/somuprime?igsh=MXFoOW9hNHF4YmFpaw==', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
                      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/somaryali', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                      { label: 'YouTube', url: 'https://youtube.com/@sadhachaarlokvidya?si=WOflItv3sgQSwmg2', icon: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /> }
                    ].map((social) => (
                      <a 
                        key={social.label} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </a>
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