import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, ChartArea, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code size={24} />,
      color: "#a855f7",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "React", level: 80 }
      ]
    },
    {
      title: "Data Platforms & MLOps",
      icon: <Database size={24} />,
      color: "#3b82f6",
      skills: [
        { name: "Snowflake", level: 90 },
        { name: "Azure Data Factory", level: 75 },
        { name: "AWS", level: 85 },
        { name: "PySpark", level: 88 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} />,
      color: "#7c3aed",
      skills: [
        { name: "LLMs", level: 90 },
        { name: "LSTMs", level: 75 },
        { name: "Transformers", level: 88 },
        { name: "GNNs", level: 70 }
      ]
    },
    {
      title: "Experimentation & Methods",
      icon: <ShieldCheck size={24} />,
      color: "#3b82f6",
      skills: [
        { name: "A/B Testing", level: 85 },
        { name: "Causal Inference", level: 75 },
        { name: "Time-Series Forecasting", level: 88 },
        { name: "Statistical Modeling", level: 90 }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: <ChartArea size={24} />,
      color: "#7c3aed",
      skills: [
        { name: "Computer Vision", level: 75 },
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 85 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 75},
        { name: "Seaborn", level: 75 },
        { name: "Plotly", level: 75 },
        { name: "ETL", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef} style={{ background: '#0a0a14' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            color: '#f1f5f9',
            textAlign: 'center',
            marginBottom: '1rem'
          }}
        >
          Technical <span style={{ color: '#a855f7' }}>Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '1.125rem',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          Comprehensive expertise across the full data science and ML engineering stack, from 
          data collection to model deployment and monitoring.
        </motion.p>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                background: '#1e1e2e',
                border: `1px solid ${category.color}40`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1rem',
                padding: '2rem'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${category.color}15 0%, transparent 100%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }} className="skill-overlay" />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: `${category.color}30`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: category.color
                  }}>
                    {category.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: category.color
                  }}>
                    {category.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#f1f5f9'
                        }}>
                          {skill.name}
                        </span>
                        
                        <span style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: category.color
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                        color: '#64748b',
                        marginBottom: '0.5rem'
                      }}>
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Expert</span>
                      </div>
                      
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(100, 116, 139, 0.3)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <motion.div
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                            borderRadius: '3px'
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            marginTop: "4rem",
            padding: "2rem",
            borderRadius: "1rem",
            background: "#1e1e2e",
            border: "1px solid #3b82f640",
            textAlign: "center"
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#f1f5f9", marginBottom: "1rem" }}>
            Continuous Learning & Certifications
          </h3>
          <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
            Currently pursuing advanced certifications in cloud platforms and specialized ML frameworks to stay at the forefront of technology.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{
              padding: "0.5rem 1rem",
              border: "1px solid #3b82f6",
              borderRadius: "0.5rem",
              color: "#3b82f6",
              fontWeight: "500"
            }}>
              AWS Solutions Architect (In Progress)
            </span>
            <span style={{
              padding: "0.5rem 1rem",
              border: "1px solid #a855f7",
              borderRadius: "0.5rem",
              color: "#a855f7",
              fontWeight: "500"
            }}>
              Google Cloud ML Engineer (Planned)
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .card:hover .skill-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Skills;
