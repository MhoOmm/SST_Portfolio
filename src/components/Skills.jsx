import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, BarChart3, Zap } from 'lucide-react';

const Skills = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code size={24} />,
      color: "#22d3ee",
      gradient: "linear-gradient(90deg, #22d3ee 0%, #0891b2 100%)",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "React", level: 80 },
        { name: "REST APIs", level: 75 },
        { name: "PyTorch", level: 88 },
        { name: "TensorFlow", level: 85 }
      ]
    },
    {
      title: "Data Platforms & MLOps",
      icon: <Database size={24} />,
      color: "#22d3ee",
      gradient: "linear-gradient(90deg, #22d3ee 0%, #0891b2 100%)",
      skills: [
        { name: "Snowflake", level: 90 },
        { name: "Azure Data Factory", level: 75 },
        { name: "AWS", level: 85 },
        { name: "PySpark", level: 88 },
        { name: "MLflow", level: 82 },
        { name: "Kubernetes", level: 75 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} />,
      color: "#a855f7",
      gradient: "linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)",
      skills: [
        { name: "LLMs", level: 90 },
        { name: "LSTMs", level: 75 },
        { name: "Transformers", level: 88 },
        { name: "GNNs", level: 75 },
        { name: "Reinforcement Learning", level: 80 },
        { name: "CNNs", level: 90 },
        { name: "Hugging Face", level: 75 }
      ]
    },
    {
      title: "Experimentation & Methods",
      icon: <Zap size={24} />,
      color: "#f59e0b",
      gradient: "linear-gradient(90deg, #f59e0b 0%, #d97706 100%)",
      skills: [
        { name: "A/B Testing", level: 85 },
        { name: "Causal Inference", level: 75 },
        { name: "Time-Series Forecasting", level: 88 },
        { name: "Statistical Modeling", level: 90 }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: <BarChart3 size={24} />,
      color: "#8b5cf6",
      gradient: "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
      skills: [
        { name: "Computer Vision", level: 75 },
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 85 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 75 },
        { name: "Seaborn", level: 75 },
        { name: "Plotly", level: 75 },
        { name: "ETL", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef} style={{ 
      background: '#0f172a'
    }}>
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
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}
        >
          Comprehensive expertise across the full data science and ML engineering stack, from 
          data collection to model deployment and monitoring.
        </motion.p>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '1.5rem',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: `${category.color}20`,
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
                  color: '#f1f5f9'
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5 
                    }}
                  >
                    {/* Skill Name and Percentage */}
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
                    
                    {/* Skill Level Labels */}
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
                    
                    {/* Progress Bar with Gradient */}
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
                          background: category.gradient, // This is the gradient part!
                          borderRadius: '3px',
                          boxShadow: `0 0 10px ${category.color}40`
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
          box-sizing: border-box;
        }
        
        .section {
          padding: 6rem 0;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }
        
        .skill-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-card:hover {
          border-color: rgba(34, 211, 238, 0.4);
          box-shadow: 0 20px 40px -10px rgba(34, 211, 238, 0.2);
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem !important;
          }
          
          .section {
            padding: 4rem 0;
          }
          
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .skill-card {
            padding: 1.5rem !important;
          }
          
          .skill-card h3 {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 0.75rem !important;
          }
          
          .skill-card {
            padding: 1.25rem !important;
          }
          
          div[style*="gap: 1.5rem"] {
            gap: 1rem !important;
          }
        }
        
        /* Ensure proper grid behavior on all screen sizes */
        @media (max-width: 450px) {
          div[style*="minmax(400px, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
