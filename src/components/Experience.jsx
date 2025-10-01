import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight, Trophy } from 'lucide-react';

const Experience = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedRole, setSelectedRole] = useState(0);

  const experiences = [
    {
      title: "Sr. Business Intelligence Data Engineer",
      company: "Providence Global Center",
      client: "Advent Health",
      location: "Hyderabad, India",
      duration: "Jul 2024 – Jul 2025",
      color: "#a855f7",
      achievements: [
        "Spearheaded an 8-member analytics team to deliver 20+ executive dashboards across 19 HITRUST domains",
        "Developed ML pipelines improving anomaly-detection accuracy to 87% and reducing incident exposure by 75%",
        "Optimized 50+ SQL/Snowflake pipelines, cutting runtime by 65% and raising reporting efficiency by 40%"
      ],
      technologies: ["Python", "Snowflake", "ML Pipelines", "SQL", "Dashboards"]
    },
    {
      title: "Business Intelligence Analyst", 
      company: "DELL Technologies",
      location: "Bangalore, India",
      duration: "Jun 2022 – Jul 2024",
      color: "#a855f7",
      achievements: [
        "Produced 30+ interactive dashboards across 4M+ Salesforce/Teradata/D&B records",
        "Conducted EDA on large SQL/Teradata/SSIS workflows, raising data quality by 60%",
        "Automated preprocessing with Python/PySpark + RPA, reducing prep time by 75%",
        "Earned Dell's Inspire Award for streamlining reporting (+50% efficiency)"
      ],
      technologies: ["Teradata", "Python", "PySpark", "Salesforce", "SSIS"]
    },
    {
      title: "Data Analyst Intern",
      company: "DELL Technologies", 
      location: "Bangalore, India",
      duration: "May 2021 – Jul 2021",
      color: "#a855f7",
      achievements: [
        "Constructed data-observability & anomaly-alerting layer across 30+ pipelines",
        "Cut detection time by over 90% preventing bad refreshes from reaching executive dashboards"
      ],
      technologies: ["SQL", "Teradata", "Data Observability"]
    },
    {
      title: "Machine Learning Intern",
      company: "HighRadius",
      location: "Hyderabad, India",
      duration: "Jan 2021 – Mar 2021", 
      color: "#a855f7",
      achievements: [
        "Designed real-time order management dashboard improving forecast accuracy by 35%",
        "Reduced manual invoicing by 25% through ML model integration"
      ],
      technologies: ["ReactJS", "MySQL", "Java Servlets", "ML Models", "LLMs"]
    }
  ];

  const getColorRgba = (color, opacity = 0.15) => {
    return `rgba(168, 85, 247, ${opacity})`;
  };

  return (
    <section id="experience" className="section" ref={sectionRef} 
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
        minHeight: '100vh'
      }}
    >
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
          Professional <span style={{ 
            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Experience</span>
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
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}
        >
          3+ years of experience in data science, ML engineering, and business intelligence 
          across leading technology companies.
        </motion.p>

        {/* Side-by-side layout: Experience cards on left, Details on right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '400px 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column - Experience Cards List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                className={`experience-card ${selectedRole === index ? 'active' : ''}`}
                onClick={() => setSelectedRole(index)}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{
                  background: selectedRole === index 
                    ? 'linear-gradient(135deg, #a855f7, #7c3aed)'
                    : '#ffffff',
                  color: selectedRole === index ? '#ffffff' : '#1e293b',
                  border: selectedRole === index 
                    ? '2px solid #a855f7' 
                    : '2px solid #e2e8f0',
                  borderRadius: '1.5rem',
                  padding: '1.5rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  boxShadow: selectedRole === index
                    ? '0 10px 40px -10px #a855f740'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: selectedRole === index
                      ? 'rgba(255,255,255,0.25)' 
                      : getColorRgba('#a855f7', 0.2),
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: selectedRole === index 
                      ? '#ffffff' 
                      : '#a855f7',
                    flexShrink: 0,
                    border: `1px solid ${selectedRole === index 
                      ? 'rgba(255,255,255,0.3)' 
                      : '#a855f730'}`
                  }}>
                    <Building2 size={20} />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: 'inherit'
                    }}>
                      {exp.title}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      opacity: 0.9
                    }}>
                      <Building2 size={14} />
                      {exp.company}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontSize: '0.8rem',
                      opacity: 0.8,
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Column - Selected Experience Details */}
          <motion.div
            key={selectedRole}
            className="experience-details"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: '#ffffff',
              border: '2px solid #a855f7',
              borderRadius: '2rem',
              padding: '2.5rem',
              boxShadow: '0 20px 40px -10px #a855f720',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '600px'
            }}
          >
            {/* Background gradient */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))',
              zIndex: 0
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              marginBottom: '2.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, #a855f715, #a855f725)',
                borderRadius: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a855f7',
                border: '2px solid #a855f730'
              }}>
                <Building2 size={28} />
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                  lineHeight: '1.2'
                }}>
                  {experiences[selectedRole].title}
                </h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  fontSize: '1rem',
                  color: '#64748b',
                  flexWrap: 'wrap',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                    <Building2 size={16} />
                    {experiences[selectedRole].company}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} />
                    {experiences[selectedRole].duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} />
                    {experiences[selectedRole].location}
                  </div>
                </div>

                {/* Technologies Used */}
                {experiences[selectedRole].technologies && (
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {experiences[selectedRole].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          background: 'rgba(168, 85, 247, 0.15)',
                          color: '#a855f7',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          border: '1px solid #a855f730'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Trophy size={20} style={{ color: '#a855f7' }} />
                Key Achievements
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {experiences[selectedRole].achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1.25rem',
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(168, 85, 247, 0.1))',
                      borderRadius: '1rem',
                      border: '1px solid #a855f720'
                    }}
                  >
                    <ChevronRight 
                      size={16} 
                      style={{ 
                        color: '#a855f7', 
                        marginTop: '0.125rem',
                        flexShrink: 0
                      }} 
                    />
                    <p style={{
                      color: '#374151',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}>
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
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
        
        .section {
          padding: 6rem 0;
          position: relative;
        }
        
        .experience-card {
          transform: translateX(0);
          transition: all 0.3s ease;
        }
        
        .experience-card:hover {
          transform: translateX(5px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15) !important;
        }
        
        .experience-card.active {
          transform: translateX(8px);
        }
        
        @media (max-width: 1200px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem !important;
          }
          
          .section {
            padding: 4rem 0;
          }
          
          .experience-details {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
