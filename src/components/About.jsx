import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, TrendingUp, Download } from 'lucide-react';

const About = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: <Award size={20} />,
      title: "Awards & Recognition",
      description: "Dell's Inspire Award winner with published research",
      color: "#f59e0b"
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Quantifiable Impact",
      description: "87% ML accuracy, 75% incident reduction",
      color: "#7c3aed"
    }
  ];

  return (
    <section id="about" className="section" ref={sectionRef} style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Getting to know me badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(124, 58, 237, 0.15)',
            color: '#7c3aed',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '2rem',
            border: '1px solid rgba(124, 58, 237, 0.3)'
          }}
        >
          👋 Getting to know me
        </motion.div>

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
            marginBottom: '3rem'
          }}
        >
          About <span style={{ color: '#a855f7' }}>Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '1.25rem',
            color: '#64748b',
            textAlign: 'center',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}
        >
          Passionate about leveraging data science and AI to solve complex business problems. 
          Currently pursuing MS in Data Science at Columbia University while building scalable ML solutions.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '4rem'
        }}>
          {/* Journey Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1.5rem'
            }}>
              My Journey in <span style={{ color: '#a855f7' }}>Data Science</span>
            </h3>
            
            <p style={{
              color: '#64748b',
              fontSize: '1.125rem',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              My journey began with a Bachelor's in Computer Science from KIIT University, 
              where I discovered my passion for AI and machine learning. Since then, I've had 
              the opportunity to work with leading technology companies like Dell and Providence 
              Global Center, where I've developed and deployed ML solutions that have made 
              tangible business impact.
            </p>
            
            <p style={{
              color: '#64748b',
              fontSize: '1.125rem',
              lineHeight: '1.7'
            }}>
              Currently pursuing my MS in Data Science at Columbia University, I'm focused on 
              advanced machine learning techniques, deep learning, and building scalable data 
              infrastructure. My goal is to bridge the gap between cutting-edge research and 
              practical business applications.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${achievement.color}40`,
                  borderRadius: '1rem',
                  padding: '2rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: `${achievement.color}20`,
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: achievement.color
                }}>
                  {achievement.icon}
                </div>
                
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: achievement.color,
                  marginBottom: '0.5rem'
                }}>
                  {achievement.title}
                </h4>
                
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Resume Section */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            background: '#e2e8f0',
            border: 'none',
            textAlign: 'center',
            padding: '3rem 2rem',
            borderRadius: '1rem'
          }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Resume & Portfolio
          </h3>
          
          <p style={{
            color: '#64748b',
            fontSize: '1.125rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Download my detailed resume or view my complete portfolio for a comprehensive 
            overview of my experience.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <motion.a
              href="/resume.pdf"
              download
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#7c3aed',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '600',
                border: 'none'
              }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#3b82f6',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '600',
                border: 'none'
              }}
            >
              ✉️ Send Message
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
