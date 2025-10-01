import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight, Trophy } from 'lucide-react';

const Experience = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedRole, setSelectedRole] = useState(1); // Start with Business Intelligence Analyst selected

  const experiences = [
    {
      title: "Sr. Business Intelligence Data Engineer",
      company: "Providence Global Center",
      client: "Advent Health",
      location: "Hyderabad, India",
      duration: "Jul 2024 – Jul 2025",
      color: "#22d3ee",
      achievements: [
        "Spearheaded an 8-member analytics team to deliver 20+ executive dashboards across 19 HITRUST domains",
        "Developed ML pipelines improving anomaly-detection accuracy to 87% and reducing incident exposure by 75%",
        "Optimized 50+ SQL/Snowflake pipelines, cutting runtime by 65% and raising reporting efficiency by 40%",
        "Integrated PySpark + MLflow into ETL, decreasing deployment errors by 40%"
      ],
      technologies: ["Python", "Snowflake", "ML Pipelines", "SQL", "Dashboards"]
    },
    {
      title: "Business Intelligence Analyst", 
      company: "DELL Technologies",
      location: "Bangalore, India",
      duration: "Jun 2022 – Jul 2024",
      color: "#22d3ee",
      achievements: [
        "Produced 30+ interactive dashboards across 4M+ Salesforce/Teradata/D&B records",
        "Conducted EDA raising data quality by 60% and eliminating recurring errors",
        "Automated preprocessing reducing prep time by 75% and supporting real-time forecasting",
        "Earned Dell's Inspire Award for streamlining reporting (+50% efficiency)"
      ],
      technologies: ["Power BI", "Tableau", "Python", "PySpark", "SQL", "Teradata", "RPA"]
    },
    {
      title: "Data Analyst Intern",
      company: "DELL Technologies", 
      location: "Bangalore, India",
      duration: "May 2021 – Jul 2021",
      color: "#22d3ee",
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
      color: "#22d3ee",
      achievements: [
        "Designed real-time order management dashboard improving forecast accuracy by 35%",
        "Reduced manual invoicing by 25% through ML model integration"
      ],
      technologies: ["ReactJS", "MySQL", "Java Servlets", "ML Models", "LLMs"]
    }
  ];

  return (
    <section id="experience" className="section" ref={sectionRef} 
      style={{ 
        background: '#f8fafc',
        minHeight: '100vh',
        padding: '6rem 0'
      }}
    >
      <div className="container">
        <motion.h2
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
          Professional <span style={{ color: '#a855f7' }}>Experience</span>
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

        {/* Main Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '350px 1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          
          {/* Left Sidebar - Experience List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedRole(index)}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{
                  background: selectedRole === index 
                    ? 'linear-gradient(135deg, #22d3ee, #0891b2)' // Exact cyan gradient from image
                    : '#ffffff',
                  color: selectedRole === index ? '#ffffff' : '#1e293b',
                  border: selectedRole === index 
                    ? 'none' 
                    : '1px solid #e2e8f0',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  boxShadow: selectedRole === index
                    ? '0 10px 30px -5px rgba(34, 211, 238, 0.4)' // Cyan shadow
                    : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: selectedRole === index
                      ? 'rgba(255,255,255,0.2)' 
                      : 'rgba(34, 211, 238, 0.15)', // Cyan background
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: selectedRole === index ? '#ffffff' : '#22d3ee' // Cyan color
                  }}>
                    <Building2 size={16} />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      color: 'inherit'
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{
                      fontSize: '0.875rem',
                      opacity: 0.9,
                      color: 'inherit'
                    }}>
                      {exp.company}
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.75rem',
                  opacity: 0.8,
                  color: 'inherit'
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
              </motion.button>
            ))}
          </div>

          {/* Right Panel - Experience Details */}
          <motion.div
            key={selectedRole}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              minHeight: '500px'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'rgba(168, 85, 247, 0.15)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a855f7'
              }}>
                <Building2 size={24} />
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#a855f7',
                  marginBottom: '0.5rem',
                  lineHeight: '1.3'
                }}>
                  {experiences[selectedRole].title}
                </h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '600' }}>
                    <Building2 size={14} />
                    {experiences[selectedRole].company}
                    {experiences[selectedRole].client && (
                      <span style={{
                        background: '#10b981',
                        color: 'white',
                        padding: '0.125rem 0.5rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        marginLeft: '0.5rem'
                      }}>
                        Client: {experiences[selectedRole].client}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {experiences[selectedRole].duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={14} />
                    {experiences[selectedRole].location}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h5 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#64748b',
                    marginBottom: '0.75rem'
                  }}>
                    Technologies Used
                  </h5>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {experiences[selectedRole].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          background: 'rgba(168, 85, 247, 0.1)',
                          color: '#a855f7',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#f59e0b', // Orange color like in the image
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Trophy size={18} style={{ color: '#f59e0b' }} />
                Key Achievements
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {experiences[selectedRole].achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'rgba(168, 85, 247, 0.05)',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(168, 85, 247, 0.1)'
                    }}
                  >
                    <ChevronRight 
                      size={16} 
                      style={{ 
                        color: '#22d3ee', // Cyan chevron
                        marginTop: '0.125rem',
                        flexShrink: 0
                      }} 
                    />
                    <p style={{
                      color: '#374151',
                      lineHeight: '1.6',
                      fontSize: '0.9rem'
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
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
            padding: 4rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
