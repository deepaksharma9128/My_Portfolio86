import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'Internship Certificate',
      issuer: 'Bharat Intern',
      date: '2024',
      description: 'Full-stack web development internship completion certificate recognizing proficiency in MERN stack development and collaborative project work.',
      skills: ['Full-Stack Development', 'MERN Stack', 'Team Collaboration', 'Project Management'],
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.id} direction="up" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Certificate Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Award Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-medium">{cert.date}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    
                    <p className={`text-xl font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-4`}>
                      {cert.issuer}
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      <ExternalLink size={18} />
                      <span>View Certificate</span>
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  whileHover={{
                    boxShadow: "0 0 40px rgba(109, 4, 207, 0.3)",
                  }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievement Stats */}
        <AnimatedSection direction="up" delay={0.4} className="mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '2', label: 'Internships Completed', color: 'from-blue-500 to-cyan-500' },
              { number: '4+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
              { number: '1', label: 'Professional Certificate', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Certifications;