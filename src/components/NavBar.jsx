import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled ? 'rgba(7, 7, 20, 0.95)' : '#0a0a14',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124, 58, 237, 0.3)' : 'none',
          transition: 'all 0.3s ease',
          padding: '1rem 0'
        }}
      >
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            {/* Logo */}
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700',
                color: '#a855f7',
                cursor: 'pointer'
              }}
            >
              ST.
            </motion.div>

            {/* Desktop Navigation */}
            <div 
              className="desktop-nav"
              style={{ 
                display: 'none',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: '#94a3b8',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div 
              className="social-links"
              style={{ 
                display: 'none',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <motion.a
                href="https://github.com/Shweta-3001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                style={{ color: '#94a3b8' }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shweta-smriti-tripathi/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                style={{ color: '#94a3b8' }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=tripathishweta3001@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Shweta,%0D%0A%0D%0AI%20came%20across%20your%20portfolio..."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                style={{ color: '#94a3b8' }}
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'block',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#e2e8f0'
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                marginTop: '1rem',
                padding: '1.5rem',
                background: '#1e1e2e',
                borderRadius: '1rem',
                border: '1px solid rgba(124, 58, 237, 0.3)'
              }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0',
                    textDecoration: 'none',
                    color: '#e2e8f0',
                    fontWeight: '500',
                    borderBottom: index < navItems.length - 1 ? '1px solid rgba(124, 58, 237, 0.2)' : 'none'
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Mobile Social Links */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(124, 58, 237, 0.2)'
              }}>
                <a href="https://github.com/Shweta-3001" target="_blank" rel="noopener noreferrer">
                  <Github size={20} style={{ color: '#94a3b8' }} />
                </a>
                <a href="https://www.linkedin.com/in/shweta-smriti-tripathi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} style={{ color: '#94a3b8' }} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=tripathishweta3001@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Shweta,%0D%0A%0D%0AI%20came%20across%20your%20portfolio..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={20} style={{ color: '#94a3b8' }} />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* CSS Styles */}
      <style jsx>{`
        .nav-link:hover {
          color: #a855f7 !important;
        }
        
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .social-links {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
