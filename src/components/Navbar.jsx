import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
  { code: 'te', label: 'తె' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/journey', label: t('nav.journey') },
    { path: '/launch-stations', label: t('nav.launchStations') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/lgci', label: t('nav.lgci') }
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Sadhachaar Logo" className="h-10 w-10 object-contain rounded-full" />
            <span className="font-heading text-xl font-semibold text-deepBlue hidden sm:inline">Sadhachaar</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-saffron'
                    : 'text-charcoal hover:text-saffron'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 text-sm rounded transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-saffron text-white'
                      : 'text-charcoal hover:bg-gray-100'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-charcoal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-saffron/10 text-saffron'
                    : 'text-charcoal hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-1 pt-2 border-t border-gray-100">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex-1 py-2 text-sm rounded transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-saffron text-white'
                      : 'bg-gray-100 text-charcoal'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}