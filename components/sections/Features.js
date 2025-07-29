'use client'

import { motion } from 'framer-motion'
import FeatureItem from '../ui/FeatureItem'

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Targeting',
      description: 'AI-powered audience segmentation that identifies your ideal customers with precision and delivers personalized content.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time insights and predictive analytics to optimize your campaigns and maximize ROI across all channels.'
    },
    {
      icon: '🤖',
      title: 'Content Generation',
      description: 'Generate compelling copy, social media posts, and email campaigns with our advanced AI writing assistant.'
    },
    {
      icon: '⚡',
      title: 'Automation Engine',
      description: 'Streamline your workflow with intelligent automation that handles repetitive tasks and optimizes performance.'
    },
    {
      icon: '🔗',
      title: 'Multi-Platform Integration',
      description: 'Seamlessly connect with 50+ marketing tools and platforms for a unified marketing ecosystem.'
    },
    {
      icon: '📈',
      title: 'Performance Optimization',
      description: 'Continuous learning algorithms that automatically improve your campaigns for better results over time.'
    }
  ]

  return (
    <section id="features" className="section-padding bg-white/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Marketers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your marketing?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of marketers who are already using AI to drive better results.
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features