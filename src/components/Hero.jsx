import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MapPin, Code, Award } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const profileImageRef = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Data Scientist",
    "AI Engineer",
    "ML Engineer", 
    "Data Analyst",
    "Data Engineer"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const typeWriter = () => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(75);
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  useEffect(() => {
    if (profileImageRef.current) {
      gsap.to(profileImageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    gsap.to(".floating-card", {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });
  }, []);

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0b2e 0%, #16213e 50%, #0f3460 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '6rem'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 450px',
          gap: '6rem',
          alignItems: 'center',
          position: 'relative',
          minHeight: '600px'
        }}>
          
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              textAlign: 'left',
              zIndex: 5,
              paddingRight: '2rem'
            }}
          >
            {/* Location Badge - Fixed above Hi, I'm Shweta */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(7, 7, 20, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                borderRadius: '1rem',
                padding: '0.75rem 1rem',
                color: '#e2e8f0',
                fontWeight: '600',
                fontSize: '0.875rem',
                marginBottom: '1.5rem'
              }}
            >
              <MapPin size={16} style={{ color: '#7c3aed' }} />
              New York, NY
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                color: '#f1f5f9'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <br />
              <span style={{ color: '#a855f7' }}>Shweta</span>
            </motion.h1>

            {/* Role Badge with Typewriter Effect */}
            <motion.div
              className="role-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(124, 58, 237, 0.15)',
                border: '1px solid rgba(124, 58, 237, 0.4)',
                borderRadius: '2rem',
                padding: '0.75rem 1.5rem',
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
                minWidth: '300px'
              }}
            >
              <div style={{
                width: '2rem',
                height: '2rem',
                background: 'rgba(124, 58, 237, 0.3)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a855f7'
              }}>
                <Code size={16} />
              </div>
              <div>
                <div style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.8rem' }}>
                  I AM A
                </div>
                <div style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '700', 
                  color: '#a855f7',
                  minHeight: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'monospace'
                }}>
                  {displayText}
                  <span 
                    style={{ 
                      marginLeft: '2px',
                      animation: 'blink 1s infinite',
                      color: '#a855f7',
                      fontWeight: '300'
                    }}
                  >
                    |
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p
              style={{
                fontSize: '1.25rem',
                color: 'rgba(226, 232, 240, 0.9)',
                lineHeight: '1.7',
                marginBottom: '2.5rem',
                maxWidth: '90%'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Columbia University MS Data Science student with 3+ years of experience in ML/AI, 
              data engineering, and business intelligence. Proven track record of delivering 
              scalable analytics solutions that drive business decisions and improve operational 
              efficiency by up to 75%.
            </motion.p>

            {/* Currently Seeking Card */}
            <motion.div
              className="seeking-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                marginBottom: '3rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                maxWidth: '90%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'rgba(59, 130, 246, 0.2)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6',
                  flexShrink: 0
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ 
                    color: '#f1f5f9', 
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: '#10b981', 
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Currently Seeking
                  </h4>
                  <p style={{ 
                    color: 'rgba(226, 232, 240, 0.8)', 
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    Seeking Summer 2026 internship opportunities in Data Science, ML Engineering, 
                    AI Engineering, Data Engineering, and Data Analytics roles at FAANG and innovative startups.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: '#7c3aed',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Code size={20} />
                View My Work
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'transparent',
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  border: '2px solid #3b82f6',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ⚡ Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Half-Inside Half-Outside Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              minHeight: '500px',
              paddingLeft: '2rem'
            }}
          >
            {/* Main Profile Image */}
            <div
              ref={profileImageRef}
              style={{
                width: '320px',
                height: '400px',
                borderRadius: '2rem',
                overflow: 'visible', // Changed to visible so cards can extend outside
                position: 'relative',
                border: '3px solid rgba(124, 58, 237, 0.4)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                zIndex: 1
              }}
            >
              <img
                src="/profile.jpg"
                alt="Shweta Smriti Tripathi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1.7rem' // Slightly less than container to account for border
                }}
              />
              
              {/* Columbia Badge - Top Left, Half Outside */}
              <motion.div
                className="floating-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '-50px', // Half outside the image
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  color: 'white',
                  borderRadius: '1rem',
                  padding: '0.75rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  zIndex: 3,
                  minWidth: '120px',
                  boxShadow: '0 10px 30px rgba(124, 58, 237, 0.4)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'white',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7c3aed',
                    fontWeight: '700',
                    fontSize: '0.6rem'
                  }}>
                    CU
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>Columbia</div>
                    <div style={{ fontSize: '0.65rem', opacity: 0.9, lineHeight: '1' }}>MS Student</div>
                  </div>
                </div>
              </motion.div>

              {/* ML Accuracy Card - Top Right, Half Outside */}
              <motion.div
                className="floating-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '-60px', // Half outside the image
                  background: 'rgba(7, 7, 20, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                  color: '#e2e8f0',
                  fontWeight: '600',
                  textAlign: 'center',
                  minWidth: '100px',
                  zIndex: 3,
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
                }}
              >
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#10b981',
                  marginBottom: '0.25rem',
                  lineHeight: '1'
                }}>
                  87%
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(226, 232, 240, 0.9)', lineHeight: '1' }}>
                  ML Accuracy
                </div>
              </motion.div>

              {/* Years Experience Card - Bottom Left, Half Outside */}
              <motion.div
                className="floating-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: '80px',
                  left: '-60px', // Half outside the image
                  background: 'rgba(7, 7, 20, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                  color: '#e2e8f0',
                  fontWeight: '600',
                  textAlign: 'center',
                  minWidth: '100px',
                  zIndex: 3,
                  boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
                }}
              >
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#a855f7',
                  marginBottom: '0.25rem',
                  lineHeight: '1'
                }}>
                  3+
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(226, 232, 240, 0.9)', lineHeight: '1.2' }}>
                  Years Experience
                </div>
              </motion.div>

              {/* Dell Award Badge - Bottom Right, Half Outside */}
              <motion.div
                className="floating-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '-40px', // Half outside the image
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  borderRadius: '1rem',
                  padding: '0.75rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  zIndex: 3,
                  minWidth: '130px',
                  boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={16} />
                  <span style={{ fontSize: '0.75rem' }}>Dell Award Winner</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            zIndex: 10
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Scroll to explore</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .container {
          max-width: 1400px !important;
          margin: 0 auto;
          padding: 0 2rem !important;
        }
        
        @media (min-width: 1600px) {
          .container {
            max-width: 1600px !important;
            padding: 0 3rem !important;
          }
        }
        
        @media (max-width: 1200px) {
          .hero-section .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center !important;
          }
          
          .seeking-card,
          .role-badge,
          p {
            max-width: 100% !important;
          }
          
          .hero-section .container > div > div:first-child {
            padding-right: 0 !important;
          }
          
          .hero-section .container > div > div:last-child {
            padding-left: 0 !important;
            justify-content: center !important;
          }
          
          /* Mobile adjustments for floating cards */
          .floating-card {
            position: relative !important;
            margin: 0.5rem !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem !important;
          }
          
          .seeking-card {
            padding: 1rem !important;
          }
          .role-badge {
            padding: 0.5rem 1rem !important;
            min-width: 280px !important;
          }
          .hero-section {
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
