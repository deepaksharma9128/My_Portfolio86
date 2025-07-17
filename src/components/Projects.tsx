import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Database, Music, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'WhatsApp Message Sender',
      description: 'AI-powered tool for sending WhatsApp messages via speech recognition',
      longDescription: 'An innovative Streamlit application that leverages AI and speech recognition to send WhatsApp messages automatically. Features include voice-to-text conversion, message scheduling, and integration with Twilio API for enhanced functionality.',
      tech: ['Python', 'Streamlit', 'Speech Recognition', 'Twilio', 'pywhatkit'],
      icon: MessageSquare,
      image: 'https://images.pexels.com/photos/5584065/pexels-photo-5584065.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-emerald-600',
      features: [
        'Voice-to-text message conversion',
        'Automated message scheduling',
        'Twilio API integration',
        'User-friendly Streamlit interface'
      ]
    },
    {
      id: 2,
      title: 'Wanderlust (Airbnb Clone)',
      description: 'Full-featured MERN stack vacation rental platform',
      longDescription: 'A comprehensive vacation rental platform built with the MERN stack, featuring property listings, user authentication, booking management, and review systems. Includes advanced search filters and responsive design.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      icon: Database,
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Property listing and management',
        'User authentication & authorization',
        'Booking system with calendar integration',
        'Review and rating system',
        'Advanced search and filtering'
      ]
    },
    {
      id: 3,
      title: 'Spotify Clone App',
      description: 'Functional music streaming platform clone',
      longDescription: 'A pixel-perfect recreation of Spotify\'s interface with functional music playback, playlist management, and responsive design. Built with modern HTML5, CSS3, and JavaScript.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs'],
      icon: Music,
      image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-400 to-blue-500',
      features: [
        'Music player with controls',
        'Playlist creation and management',
        'Responsive design',
        'Search functionality',
        'Audio visualization'
      ]
    },
    {
      id: 4,
      title: 'Instagram-like Post App',
      description: 'Social media post application with Node.js backend',
      longDescription: 'A social media application that allows users to create, display, and interact with posts. Features include user profiles, photo uploads, comments, and real-time interactions built with Node.js and Express.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Multer', 'Socket.io'],
      icon: Zap,
      image: 'https://images.pexels.com/photos/4143794/pexels-photo-4143794.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-500 to-rose-600',
      features: [
        'Post creation with image upload',
        'User profiles and authentication',
        'Comment and like system',
        'Real-time notifications',
        'Responsive feed layout'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} direction="up" delay={index * 0.2}>
              <motion.div
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project.id)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
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

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`project-${selectedProject}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30"
              >
                {projects
                  .filter(project => project.id === selectedProject)
                  .map(project => (
                    <div key={project.id}>
                      {/* Modal Header */}
                      <div className="relative h-64">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}></div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                        >
                          ×
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="p-8">
                        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 text-lg mb-6">{project.longDescription}</p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2 text-gray-300">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Full Tech Stack */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                          >
                            <ExternalLink size={20} />
                            <span>View Live Demo</span>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                          >
                            <Github size={20} />
                            <span>View Source Code</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;