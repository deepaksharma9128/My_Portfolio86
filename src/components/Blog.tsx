import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Code, Database, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable MERN Stack Applications',
      excerpt: 'Learn best practices for building scalable web applications using MongoDB, Express.js, React, and Node.js.',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'MERN Stack',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Code,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'MongoDB Performance Optimization Tips',
      excerpt: 'Discover advanced techniques for optimizing MongoDB queries and improving database performance.',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Database',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Database,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'Responsive Design with Tailwind CSS',
      excerpt: 'Master responsive design principles and create beautiful, mobile-first interfaces with Tailwind CSS.',
      date: '2024-03-05',
      readTime: '5 min read',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deepak's Blog
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I share insights on web development, best practices, and the latest technologies in the MERN stack ecosystem
          </p>
        </AnimatedSection>

        {/* About Blog Section */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">About My Blog</h3>
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Deepak Kumar, a passionate Full Stack Developer and Creative Technologist currently pursuing 
              my B.Tech in Computer Science Engineering. Through my blog, I share my journey in web development, 
              insights into the MERN stack, and practical tips for building modern web applications. Whether you're 
              a beginner looking to learn or an experienced developer seeking optimization techniques, you'll find 
              valuable content here covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and much more.
            </p>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} direction="up" delay={index * 0.2}>
              <motion.article
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white rounded-full text-sm font-medium shadow-lg`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${post.color} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    <post.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(109, 4, 207, 0.2)",
                  }}
                />
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* Blog CTA */}
        <AnimatedSection direction="up" delay={0.6} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            View All Blog Posts
          </motion.button>
        </AnimatedSection>

        {/* Blog Topics */}
        <AnimatedSection direction="up" delay={0.8} className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Topics I Write About</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'JavaScript',
                'HTML5', 'CSS3', 'Tailwind CSS', 'Express.js', 'Web Development',
                'Database Design', 'API Development', 'Full-Stack Development'
              ].map((topic, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm text-gray-300 rounded-full border border-purple-500/30 hover:border-purple-500/60 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;