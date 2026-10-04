import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, ShieldCheck, Cloud, BarChart3, GitMerge } from 'lucide-react';

const Skills = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      color: "#22d3ee",
      gradient: "linear-gradient(90deg, #22d3ee 0%, #0891b2 100%)",
      bars: [
        { name: "Python", level: 95 },
        { name: "SQL",    level: 92 },
        { name: "Bash",   level: 78 },
        { name: "Java",   level: 80 },
        { name: "R",      level: 72 }
      ],
      tags: []
    },
    {
      title: "Data Engineering",
      icon: <GitMerge size={24} />,
      color: "#a855f7",
      gradient: "linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)",
      bars: [
        { name: "PySpark / Spark",            level: 90 },
        { name: "Airflow",                    level: 88 },
        { name: "dbt",                        level: 85 },
        { name: "Kafka",                      level: 80 },
        { name: "Batch & Streaming Pipelines",level: 87 },
        { name: "A/B Testing",                level: 84 }
      ],
      tags: ["ETL/ELT", "Databricks", "Incremental Loads", "Data Contracts"]
    },
    {
      title: "Data Modeling & Warehousing",
      icon: <Database size={24} />,
      color: "#22d3ee",
      gradient: "linear-gradient(90deg, #22d3ee 0%, #0891b2 100%)",
      bars: [
        { name: "Snowflake",           level: 92 },
        { name: "Teradata",            level: 85 },
        { name: "BigQuery",            level: 80 },
        { name: "Azure SQL",           level: 78 },
        { name: "Dimensional Modeling",level: 90 }
      ],
      tags: ["Schema Design", "S3", "Star / Snowflake Schema", "SCD"]
    },
    {
      title: "Data Quality & Governance",
      icon: <ShieldCheck size={24} />,
      color: "#10b981",
      gradient: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
      bars: [
        { name: "Schema Validation",   level: 90 },
        { name: "Data Quality",        level: 88 },
        { name: "Pipeline Monitoring", level: 85 },
        { name: "CI/CD",              level: 82 }
      ],
      tags: ["Data Contracts", "Data Validation", "Freshness SLOs", "Schema-Drift Alerts", "dbt Tests"]
    },
    {
      title: "Cloud & APIs",
      icon: <Cloud size={24} />,
      color: "#f59e0b",
      gradient: "linear-gradient(90deg, #f59e0b 0%, #d97706 100%)",
      bars: [
        { name: "AWS",     level: 85 },
        { name: "Azure",   level: 80 },
        { name: "Docker",  level: 82 },
        { name: "FastAPI", level: 88 }
      ],
      tags: ["Kubernetes", "Git", "REST APIs", "MCP (Model Context Protocol)"]
    },
    {
      title: "Analytics & ML",
      icon: <BarChart3 size={24} />,
      color: "#8b5cf6",
      gradient: "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
      bars: [
        { name: "Power BI",    level: 88 },
        { name: "Tableau",     level: 85 },
        { name: "Pandas",      level: 95 },
        { name: "NumPy",       level: 92 },
        { name: "scikit-learn",level: 88 },
        { name: "PyTorch",     level: 85 },
        { name: "TensorFlow",  level: 82 }
      ],
      tags: ["XGBoost", "LightGBM"]
    }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef} style={{ background: '#0f172a' }}>
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
          Full-stack data engineering expertise — from raw ingestion and warehouse modeling
          to quality governance, cloud deployment, and ML-powered analytics.
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
              transition={{ delay: categoryIndex * 0.08, duration: 0.6 }}
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
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: category.gradient,
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />

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
                  color: category.color,
                  boxShadow: `0 0 12px ${category.color}30`
                }}>
                  {category.icon}
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#f1f5f9'
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Proficiency bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.bars.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      delay: categoryIndex * 0.08 + skillIndex * 0.05,
                      duration: 0.5
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.4rem'
                    }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#f1f5f9' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '600', color: category.color }}>
                        {skill.level}%
                      </span>
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
                          background: category.gradient,
                          borderRadius: '3px',
                          boxShadow: `0 0 8px ${category.color}50`
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          delay: categoryIndex * 0.08 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tag pills for additional tools */}
              {category.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: categoryIndex * 0.08 + 0.6, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1.5rem',
                    paddingTop: '1.25rem',
                    borderTop: `1px solid ${category.color}20`
                  }}
                >
                  {category.tags.map((tag, ti) => (
                    <span key={ti} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: `${category.color}12`,
                      color: category.color,
                      border: `1px solid ${category.color}30`,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2rem',
                      fontSize: '0.78rem',
                      fontWeight: '500'
                    }}>
                      <span style={{
                        width: '5px', height: '5px',
                        borderRadius: '50%',
                        background: category.color,
                        boxShadow: `0 0 5px ${category.color}`,
                        flexShrink: 0,
                        display: 'inline-block'
                      }} />
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
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

        @media (max-width: 768px) {
          .container { padding: 0 1rem !important; }
          .section { padding: 4rem 0; }
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .skill-card { padding: 1.5rem !important; }
          .skill-card h3 { font-size: 1.1rem !important; }
        }

        @media (max-width: 480px) {
          .container { padding: 0 0.75rem !important; }
          .skill-card { padding: 1.25rem !important; }
        }

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
