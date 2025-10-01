import React from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Users, Award, BookOpen } from 'lucide-react';

const Stats = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    {
      number: "25+",
      label: "Technologies Mastered",
      sublabel: "Across 5 major categories",
      color: "#a855f7",
      icon: <BarChart3 size={24} />
    },
    {
      number: "3+",
      label: "Years Experience",
      sublabel: "In production environments",
      color: "#3b82f6",
      icon: <Users size={24} />
    },
    {
      number: "10M+",
      label: "Records Processed",
      sublabel: "In real-world applications",
      color: "#7c3aed",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="stats" className="section" ref={sectionRef} style={{ background: '#f8fafc', paddingBottom: '2rem' }}>
      <div className="container">
        {/* Stats Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
            // REMOVED: marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                background: '#ffffff',
                border: `1px solid ${stat.color}40`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${stat.color}10 0%, transparent 100%)`,
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }} className="card-overlay" />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: `${stat.color}20`,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: stat.color
                }}>
                  {stat.icon}
                </div>
                
                <h3 style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </h3>
                
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>
                  {stat.label}
                </h4>
                
                <p style={{
                  color: '#64748b',
                  fontSize: '0.875rem'
                }}>
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .card:hover .card-overlay {
          opacity: 1;
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

export default Stats;
