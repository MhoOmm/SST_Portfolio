import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: '', message: '' });
  
  try {
    console.log('🚀 Starting email send process...');
    console.log('Form Data:', formData);

    // Initialize EmailJS first
    emailjs.init("UEUABVr6MrtDlPkqv");
    
    const result = await emailjs.send(
      "service_60lsejz", 
      "template_cvlyekp", 
      {
        from_name: formData.from_name,
        name: formData.from_name,
        from_email: formData.from_email,
        email: formData.from_email,
        company: formData.company || 'Not specified',
        message: formData.message,
      }
    );

    console.log('✅ Email sent successfully:', result);
    
    setStatus({
      type: 'success',
      message: '✅ Message sent successfully! I\'ll get back to you within 24 hours.'
    });
    
    // Reset form
    setFormData({
      from_name: '',
      from_email: '',
      company: '',
      message: ''
    });
    
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    
    setStatus({
      type: 'error',
      message: '❌ Failed to send message. Please try again or email me directly at tripathishweta3001@gmail.com'
    });
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setStatus({ type: '', message: '' }), 7000);
  }
};

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "tripathishweta3001@gmail.com",
      href: "mailto:tripathishweta3001@gmail.com",
      color: "#3b82f6"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone", 
      value: "+1(332)250-6048",
      href: "tel:+13322506048",
      color: "#10b981"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "New York, NY",
      href: "#",
      color: "#8b5cf6"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      subtitle: "Connect with me professionally",
      href: "https://www.linkedin.com/in/shweta-smriti-tripathi/",
      color: "#0077b5"
    },
    {
      icon: <Github size={20} />,
      title: "GitHub", 
      subtitle: "Check out my code repositories",
      href: "https://github.com/Shweta-3001",
      color: "#333333"
    }
  ];

  return (
    <section id="contact" className="section" ref={sectionRef} style={{ background: '#f8fafc', paddingTop: '2rem' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '1rem'
          }}
        >
          Let's <span style={{ color: '#3b82f6' }}>Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '1.125rem',
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}
        >
          Interested in discussing data science opportunities, collaboration, or just want to chat 
          about AI and machine learning? I'd love to hear from you!
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '2rem'
            }}>
              Get in Touch
            </h3>

            <div style={{ marginBottom: '3rem' }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: '#ffffff',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    marginBottom: '1.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: info.color === '#3b82f6' 
                      ? 'rgba(59, 130, 246, 0.2)' 
                      : info.color === '#10b981'
                      ? 'rgba(16, 185, 129, 0.2)'
                      : 'rgba(139, 92, 246, 0.2)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: info.color
                  }}>
                    {info.icon}
                  </div>
                  
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.25rem'
                    }}>
                      {info.title}
                    </h4>
                    <p style={{
                      color: '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '1.5rem'
            }}>
              Follow Me
            </h4>

            <div>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: '#ffffff',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    marginBottom: '1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: social.color === '#0077b5' 
                      ? 'rgba(0, 119, 181, 0.2)' 
                      : 'rgba(51, 51, 51, 0.2)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color
                  }}>
                    {social.icon}
                  </div>
                  
                  <div>
                    <h5 style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.125rem'
                    }}>
                      {social.title}
                    </h5>
                    <p style={{
                      color: '#64748b',
                      fontSize: '0.8rem'
                    }}>
                      {social.subtitle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              background: '#ffffff',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1.5rem'
            }}>
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.75rem',
                      fontSize: '0.875rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.75rem',
                      fontSize: '0.875rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or organization"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows="5"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                style={{
                  width: '100%',
                  padding: '0.875rem 1.5rem',
                  background: isSubmitting ? '#94a3b8' : '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '1rem',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    background: status.type === 'success' ? '#dcfce7' : '#fef2f2',
                    border: `1px solid ${status.type === 'success' ? '#10b981' : '#ef4444'}`,
                    color: status.type === 'success' ? '#065f46' : '#7f1d1d',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                >
                  {status.type === 'success' ? <CheckCircle size={18} style={{marginTop: '2px'}} /> : <AlertCircle size={18} style={{marginTop: '2px'}} />}
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        input:focus,
        textarea:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .section {
          padding: 4rem 0;
          position: relative;
        }
        
        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
          
          .section {
            padding: 6rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
