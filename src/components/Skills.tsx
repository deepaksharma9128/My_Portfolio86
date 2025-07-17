import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-purple-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-blue-500' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'SQL', level: 78, color: 'from-blue-600 to-indigo-600' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 88, color: 'from-purple-500 to-pink-500' },
        { name: 'Streamlit', level: 75, color: 'from-red-500 to-pink-500' },
        { name: 'DSA', level: 82, color: 'from-indigo-500 to-purple-500' },
        { name: 'Team Management', level: 85, color: 'from-emerald-500 to-teal-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={categoryIndex} 
              direction="up" 
              delay={categoryIndex * 0.2}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                      }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{
                              x: ['0%', '100%', '0%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-white/20 w-1/3"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(109, 4, 207, 0.3)",
                  }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <AnimatedSection direction="up" delay={0.6} className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5', 
                'CSS3', 'Git', 'GitHub', 'Tailwind CSS', 'Streamlit', 'SQL'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="text-gray-300 hover:text-white font-medium">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;