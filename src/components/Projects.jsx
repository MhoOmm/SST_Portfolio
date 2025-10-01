import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Brain, Eye, Bot, Zap, Clock, Sparkles } from 'lucide-react';

const Projects = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Computer Vision', 'Machine Learning', 'NLP', 'IoT & Analytics'];

  const projects = [
    {
      title: "Brain Tumor Detection Using YOLOv10",
      category: "Computer Vision",
      description: "Implemented a CNN-based MRI detection workflow, achieving 82% accuracy and cutting review time by 40%",
      impact: "82% accuracy, 40% reduction in review time",
      tech: ["PyTorch", "OpenCV", "CNNs", "YOLOv10", "Medical Imaging"],
      github: "https://github.com/Shweta-3001/Brain-Tumour-Detection-Using-YOLOv10",
      icon: <Eye size={20} />,
      color: "#a855f7",
      gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)"
    },
    {
      title: "Time Series Forecasting for Energy Consumption",
      category: "Machine Learning", 
      description: "Built LSTM/Transformer forecasts on 5M+ records, achieving 85% accuracy and reducing lead time by 30% for planning",
      impact: "85% accuracy, 30% reduction in lead time",
      tech: ["LSTM", "Transformers", "Scikit-learn", "Python", "Time Series"],
      github: "https://github.com/Shweta-3001",
      icon: <Clock size={20} />,
      color: "#22d3ee",
      gradient: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)"
    },
    {
      title: "Semantic Book Recommender System",
      category: "NLP",
      description: "Trained a text-based recommender with >80% accuracy, reducing manual search by 70% and boosting discovery by 70%",
      impact: "80% accuracy, 70% search reduction",
      tech: ["LLMs", "NLP", "SpaCy", "BERT", "Hugging Face", "Scikit-learn"],
      github: "https://github.com/Shweta-3001",
      icon: <Bot size={20} />,
      color: "#7c3aed",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)"
    },
    {
      title: "Cloud-Based IoT & Predictive Analytics for Smart Irrigation",
      category: "IoT & Analytics",
      description: "Deployed an RL-driven IoT irrigation system, lowering water use by 30% and increasing yields by 20%",
      impact: "30% water reduction, 20% yield increase",
      tech: ["Azure", "Reinforcement Learning", "Python", "IoT Sensors", "Cloud Computing"],
      icon: <Zap size={20} />,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    },
    {
      title: "Real-time Order Management Dashboard",
      category: "Machine Learning",
      description: "Designed a real-time dashboard with ML models and LLMs to predict client payment dates, improving forecast accuracy by 35%",
      impact: "35% forecast improvement, 25% manual reduction",
      tech: ["ReactJS", "MySQL", "Java Servlets", "ML Models", "LLMs"],
      icon: <Brain size={20} />,
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section" ref={sectionRef} 
      style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Featured Work Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #22d3ee, #0891b2)',
          color: '#ffffff',
          padding: '0.5rem 1.5rem',
          borderRadius: '2rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Sparkles size={16} />
          Featured Work
        </div>
      </motion.div>

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
          Featured <span style={{ 
            background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '1.125rem',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}
        >
          Showcasing real-world applications of machine learning, data science, and AI 
          technologies with quantifiable impact.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: `1px solid ${activeFilter === filter ? '#22d3ee' : 'rgba(148, 163, 184, 0.3)'}`,
                background: activeFilter === filter 
                  ? 'linear-gradient(135deg, #22d3ee, #0891b2)'
                  : 'rgba(30, 41, 59, 0.5)',
                color: activeFilter === filter ? '#ffffff' : '#94a3b8',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '2rem'
          }}
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              layout
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient overlay at top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: project.gradient,
                zIndex: 1
              }} />

              {/* Project Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  background: project.gradient,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: `0 8px 16px ${project.color}30`
                }}>
                  {project.icon}
                </div>
                
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  style={{
                    color: '#94a3b8',
                    transition: 'color 0.3s ease',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(148, 163, 184, 0.1)'
                  }}
                >
                  <Github size={20} />
                </motion.a>
              </div>

              {/* Category Badge */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{
                  background: `${project.color}20`,
                  color: project.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '1.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  border: `1px solid ${project.color}40`
                }}>
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#f1f5f9',
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>
                {project.title}
              </h3>

              <p style={{
                color: '#94a3b8',
                lineHeight: '1.6',
                marginBottom: '2rem',
                fontSize: '1rem'
              }}>
                {project.description}
              </p>

              {/* Impact Section - Styled like reference */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                borderRadius: '1rem',
                padding: '1.5rem',
                marginBottom: '2rem',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
                  borderRadius: '1rem 1rem 0 0'
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <Zap size={18} style={{ color: '#22d3ee' }} />
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#f1f5f9'
                  }}>
                    Impact
                  </span>
                </div>
                <p style={{
                  color: '#22d3ee',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {project.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      background: 'rgba(100, 116, 139, 0.2)',
                      color: '#e2e8f0',
                      padding: '0.5rem 1rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      border: '1px solid rgba(148, 163, 184, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/Shweta-3001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
              color: '#ffffff',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 10px 20px rgba(34, 211, 238, 0.3)'
            }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
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
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
          border-color: rgba(34, 211, 238, 0.4);
          box-shadow: 0 20px 40px -10px rgba(34, 211, 238, 0.2);
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem !important;
          }
          
          .section {
            padding: 4rem 0;
          }
          
          .project-card {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
