import React from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Columbia University in the city of New York",
      location: "New York, NY",
      duration: "Aug 2025 – Dec 2026",
      coursework: [
        "Applied Machine Learning",
        "Applied Deep Learning", 
        "Exploratory Data Analytics",
        "Probability & Statistics"
      ],
      color: "#a855f7"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Kalinga Institute of Industrial Technology",
      location: "Odisha, India", 
      duration: "Jun 2018 – Jul 2022",
      gpa: "3.8/4.0",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "DBMS",
        "Software Engineering",
        "Data Structures & Algorithms"
      ],
      color: "#3b82f6"
    }
  ];

  const achievements = [
    {
      title: "Dell's Inspire Award",
      year: "2023",
      description: "Recognized for streamlining reporting processes with +50% efficiency improvement"
    },
    {
      title: "Published Research Paper",
      year: "2020",
      description: "AI-based fault diagnosis in coal mine power systems at ICOM 2020, achieving 70% increase in anomaly detection accuracy"
    }
  ];

  return (
    <section id="education" className="section" ref={sectionRef} style={{ background: '#f8fafc' }}>
      <div className="container">
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {/* Achievements Stats */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <motion.div
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                background: '#e0f2fe',
                border: 'none',
                padding: '1.5rem',
                minWidth: '160px',
                textAlign: 'center',
                borderRadius: '1rem'
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#0369a1',
                marginBottom: '0.5rem'
              }}>
                20+
              </h3>
              <p style={{
                color: '#0369a1',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                Executive Dashboards
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                background: '#dcfce7',
                border: 'none',
                padding: '1.5rem',
                minWidth: '160px',
                textAlign: 'center',
                borderRadius: '1rem'
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                10M+
              </h3>
              <p style={{
                color: '#059669',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                Records Processed
              </p>
            </motion.div>
          </div>

          {/* Continuous Learning Card */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderRadius: '1rem',
              padding: '2rem'
            }}
          >
            <div style={{
              width: '3rem',
              height: '3rem',
              background: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3b82f6'
            }}>
              <GraduationCap size={20} />
            </div>
            
            <div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '0.25rem'
              }}>
                Continuous Learning
              </h4>
              <p style={{
                color: '#64748b',
                fontSize: '0.875rem'
              }}>
                Columbia MS Data Science, staying current with latest tech
              </p>
            </div>
          </motion.div>
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
            marginBottom: '4rem'
          }}
        >
          <span style={{ color: '#8b5cf6' }}>Education</span>
        </motion.h2>

        {/* Education Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: '#ffffff',
                border: `2px solid ${edu.color}30`,
                borderColor: `${edu.color}30`,
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: `${edu.color}20`,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: edu.color,
                  flexShrink: 0
                }}>
                  <GraduationCap size={24} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3'
                  }}>
                    {edu.degree}
                  </h3>
                  
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: edu.color,
                    marginBottom: '1rem'
                  }}>
                    {edu.school}
                  </h4>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.875rem',
                    color: '#64748b',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} />
                      {edu.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div style={{
                        background: 'rgba(16, 185, 129, 0.2)',
                        color: '#10b981',
                        padding: '0.125rem 0.5rem',
                        borderRadius: '0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h5 style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.75rem'
                }}>
                  Key Coursework:
                </h5>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '2rem'
          }}
        >
          Awards & <span style={{ color: '#f59e0b' }}>Recognition</span>
        </motion.h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                borderRadius: '1rem',
                padding: '2rem'
              }}
            >
              <div style={{
                width: '3rem',
                height: '3rem',
                background: 'rgba(245, 158, 11, 0.2)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                flexShrink: 0
              }}>
                <Award size={20} />
              </div>
              
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1e293b'
                  }}>
                    {achievement.title}
                  </h4>
                  
                  <span style={{
                    background: '#64748b',
                    color: '#ffffff',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {achievement.year}
                  </span>
                </div>
                
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '0.9rem'
                }}>
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
