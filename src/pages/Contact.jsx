import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);
    
    try {
      const response = await fetch('https://formsubmit.co/akhi.somu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setStatus('success');
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
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
            <span className="premium-badge mb-6">Connect With Us</span>
            <h1 className="text-display-sm mb-8">
              Let's <span className="text-gold italic">Connect</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team to start your journey towards a more balanced and authentic life.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.05),_transparent_70%)]" />
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-8">
                Headquarters
              </span>
              
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.99 1.99 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-deepCharcoal text-lg mb-1">Educational Headquarters</h4>
                    <p className="text-lightGray">
                      VARANASI
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.99 1.99 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-deepCharcoal text-lg mb-1">Administration Headquarters</h4>
                    <p className="text-lightGray">
                      HYDERABAD
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.99 1.99 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-deepCharcoal text-lg mb-1">Main Office</h4>
                    <p className="text-lightGray">
                      Flat 1202, B Block, Aditya Imperial Heights<br />
                      Hafeezpet, Hyderabad - 500049<br />
                      Contact: 9490751516
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-deepCharcoal text-lg mb-1">Phone</h4>
                    <p className="text-lightGray">
                      9490751516
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-deepCharcoal text-lg mb-1">Website</h4>
                    <p className="text-lightGray">
                      www.missionsadha.org
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-deepCharcoal text-lg mb-1">GST Number</h4>
                    <p className="text-lightGray">
                      36AKLPR4043F1Z2
                    </p>
                  </div>
                </motion.div>

                {/* Social Connection */}
                <div className="pt-8 border-t border-gold/10">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-6">Follow our Journey</h4>
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
                        className="w-10 h-10 rounded-xl bg-ivory border border-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} action="https://formsubmit.co/akhi.somu@gmail.com" method="POST" className="relative bg-ivory rounded-2xl p-8 border border-gold-muted/20">
                <input type="hidden" name="_subject" value="New Contact Form Submission - Sadhachaar" />
                <input type="hidden" name="_next" value={window.location.href} />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <h2 className="text-2xl font-heading font-semibold text-deepCharcoal mb-6">
                  Send a Message
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-gold-muted/30 focus:border-gold focus:outline-none transition-colors bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-gold-muted/30 focus:border-gold focus:outline-none transition-colors bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-gold-muted/30 focus:border-gold focus:outline-none transition-colors bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-gold-muted/30 focus:border-gold focus:outline-none transition-colors resize-none bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" disabled={isSending} className="btn-primary w-full text-lg py-4 disabled:opacity-50">
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20 rounded-bl-2xl" />
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-softWhite relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-4">
              Location
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-deepCharcoal">
              Find Us
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-ivory rounded-2xl p-8 border border-gold-muted/20 min-h-[300px] flex items-center justify-center"
          >
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.99 1.99 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lightGray">Map integration coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}