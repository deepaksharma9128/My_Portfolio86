import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9128643842',
      href: 'tel:+919128643842',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'deepakkrthumma@gmail.com',
      href: 'mailto:deepakkrthumma@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sitamarhi, Bihar, India',
      href: 'https://maps.google.com/?q=Sitamarhi,Bihar,India',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/deepaksharma9128', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/deepak-sharma9128/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/deepak_sharma700/', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: MessageCircle, href: 'https://wa.me/919128643842', label: 'WhatsApp', color: 'hover:bg-green-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I am happy to chat with you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-lg group-hover:shadow-purple-500/25`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 group`}
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
                </div>
              </div>

              {/* Quick Message */}
              {/* Resume Download Button */}
                <motion.a
                href="/Deepak_Resume.pdf"
                download="Deepak_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:from-teal-600 hover:to-purple-600 hover:shadow-purple-500/30 text-center"
              >
                Download My Resume
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30"
              >
                <p className="text-gray-300 text-center italic">
                  "I'm always excited to discuss new opportunities and collaborate on innovative projects. Let's build something amazing together!"
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              whileHover={{
                boxShadow: "0 0 30px rgba(109, 4, 207, 0.2)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
              
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;