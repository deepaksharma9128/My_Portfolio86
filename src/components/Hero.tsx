import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/deepaksharma9128', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/deepak-sharma9128/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/deepak_sharma700/', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Discord: deepakkumar9128' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 9128643842', href: 'tel:+919128643842' },
    { icon: Mail, text: 'deepakkrthumma@gmail.com', href: 'mailto:deepakkrthumma@gmail.com' },
    { icon: MapPin, text: 'Sitamarhi, Bihar, India', href: '#' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(109,4,207,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -20, 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(109,4,207,0.5)',
                    '0 0 40px rgba(109,4,207,0.8)',
                    '0 0 20px rgba(109,4,207,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold text-purple-400 overflow-hidden"
                >
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Deepak Kumar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </motion.div>
              
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-dashed border-purple-400/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Deepak
              </span>
              <br />
              <span className="text-white">Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 mb-4"
            >
              <span className="text-purple-400">Full Stack Developer</span> |{' '}
              <span className="text-pink-400">Creative Technologist</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-gray-400 mb-6 text-lg"
            >
              B.Tech in CSE (2022-2026)<br />
              Vivekananda Global University, Jaipur
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-3 mb-8"
            >
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-5 h-5 group-hover:text-purple-400" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="w-6 h-6" />
                  <motion.div
                    className="absolute inset-0 bg-purple-600 rounded-full opacity-0 group-hover:opacity-20"
                    initial={false}
                    whileHover={{ scale: 1.2, opacity: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;