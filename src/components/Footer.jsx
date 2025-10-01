import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Shweta-3001",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/shweta-smriti-tripathi/",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "https://mail.google.com/mail/?view=cm&to=tripathishweta3001@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer style={{
      background: '#070714',
      color: '#f1f5f9',
      padding: '3rem 0 2rem',
      borderTop: '1px solid rgba(148, 163, 184, 0.2)'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#a855f7'
              }}
            >
              Shweta Smriti Tripathi
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                color: '#94a3b8',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}
            >
              Data Scientist & AI Engineer passionate about solving complex problems 
              with machine learning and data-driven insights. Currently pursuing MS 
              in Data Science at Columbia University.
            </motion.p>

            <div className="social-links" style={{ 
              display: 'flex', 
              gap: '1rem'
            }}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: '#1e1e2e',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#a855f7';
                    e.target.style.color = '#ffffff';
                    e.target.style.borderColor = '#a855f7';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#1e1e2e';
                    e.target.style.color = '#94a3b8';
                    e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links-section">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#f1f5f9'
              }}
            >
              Quick Links
            </motion.h4>
            
            <div className="links-list" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem' 
            }}>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-section">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#f1f5f9'
              }}
            >
              Contact
            </motion.h4>
            
            <div className="contact-list" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem' 
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{ color: '#94a3b8', fontSize: '0.875rem' }}
              >
                New York, NY
              </motion.div>
              
              <motion.a
                href="mailto:sst2166@columbia.edu"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                sst2166@columbia.edu
              </motion.a>
              
              <motion.a
                href="tel:+13322506048"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                +1 (332) 250-6048
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            paddingTop: '2rem',
            textAlign: 'center'
          }}
        >
          <p style={{
            color: '#64748b',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            <span>© {new Date().getFullYear()} Shweta Smriti Tripathi.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Built with <Heart size={14} style={{ color: '#ef4444' }} /> using React & Framer Motion
            </span>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .footer-section {
          text-align: left;
        }
        
        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
        }
        
        /* Mobile Center Alignment */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2.5rem !important;
          }
          
          .footer-section {
            text-align: center !important;
          }
          
          .social-links {
            justify-content: center !important;
          }
          
          .links-list {
            align-items: center !important;
          }
          
          .contact-list {
            align-items: center !important;
          }
          
          .footer-section h3,
          .footer-section h4 {
            text-align: center !important;
          }
          
          .footer-section p {
            text-align: center !important;
            max-width: none !important;
          }
        }
        
        /* Very small screens */
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .footer-grid {
            gap: 2rem !important;
          }
          
          .social-links {
            gap: 0.75rem !important;
          }
          
          .social-links a {
            width: 2.25rem !important;
            height: 2.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
