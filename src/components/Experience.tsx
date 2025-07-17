import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'LinuxWorld Informatics',
      role: 'Internship',
      period: '15 June – 15 August 2025',
      location: 'Remote',
      description: 'Hands-on training in Linux system administration, shell scripting, and advanced system management techniques.',
      highlights: [
        'Linux system administration and configuration',
        'Advanced shell scripting and automation',
        'System monitoring and performance optimization',
        'Network configuration and troubleshooting'
      ],
      color: 'from-blue-500 to-cyan-500',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Bharat Intern',
      role: 'Virtual Internship',
      period: 'March 2024',
      location: 'Remote',
      description: 'Full-stack web development internship focused on building modern web applications and working with remote teams.',
      highlights: [
        'Full-stack web development with MERN stack',
        'Collaborative project development',
        'Remote team coordination and communication',
        'Code review and best practices implementation'
      ],
      color: 'from-green-500 to-emerald-500',
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            My journey through internships and professional development experiences
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {experiences.map((experience, index) => (
              <AnimatedSection 
                key={experience.id} 
                direction="right" 
                delay={index * 0.3}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start">
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(109, 4, 207, 0.7)',
                          '0 0 0 10px rgba(109, 4, 207, 0)',
                          '0 0 0 0 rgba(109, 4, 207, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-full flex items-center justify-center`}
                    >
                      <Briefcase className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="ml-8 flex-1 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        experience.status === 'upcoming' 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {experience.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Company & Role */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-4`}>
                      {experience.role}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <motion.li
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.3) + (highlightIndex * 0.1) }}
                            className="flex items-center space-x-3 text-gray-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full flex-shrink-0`}></div>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      whileHover={{
                        boxShadow: "0 0 30px rgba(109, 4, 207, 0.2)",
                      }}
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;