import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Zap, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'MERN Stack Expert',
      description: 'Specialized in building scalable web applications with MongoDB, Express.js, React, and Node.js',
    },
    {
      icon: Heart,
      title: 'Passionate Developer',
      description: 'Driven by a love for creating innovative solutions and user-friendly experiences',
    },
    {
      icon: Zap,
      title: 'Creative Technologist',
      description: 'Combining technical expertise with creative problem-solving to build amazing products',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering high-quality solutions that exceed expectations',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Text */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Hi! I'm Deepak Kumar
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer and Creative Technologist currently pursuing my 
                B.Tech in Computer Science Engineering at Vivekananda Global University, Jaipur (2022-2026). 
                Based in Sitamarhi, Bihar, India, I specialize in building innovative web experiences 
                that combine cutting-edge technology with user-centered design.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans the entire MERN stack, along with proficiency in Node.js, modern 
                JavaScript, database management with SQL and MongoDB, and data structures & algorithms. 
                I'm passionate about creating scalable, efficient, and visually appealing web applications 
                that solve real-world problems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and community involvement. I believe 
                in continuous learning and staying updated with the latest trends in web development.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer"
              >
                <span>Let's Build Something Amazing Together</span>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Highlights Grid */}
          <AnimatedSection direction="right">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;