'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

const Demo = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState('dashboard')

  const demoFeatures = [
    {
      id: 'dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time insights and predictive analytics',
      icon: '📊'
    },
    {
      id: 'content',
      title: 'Content Generation',
      description: 'AI-powered copy and creative generation',
      icon: '✍️'
    },
    {
      id: 'automation',
      title: 'Smart Automation',
      description: 'Intelligent workflow automation',
      icon: '⚡'
    }
  ]

  const AnimatedDashboard = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Campaign Performance</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Live</span>
        </div>
      </div>
      
      {/* Animated Charts */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-lg p-4 shadow-sm"
        >
          <div className="text-sm text-gray-600 mb-2">Engagement Rate</div>
          <div className="text-2xl font-bold text-green-600">+127%</div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-2 bg-green-200 rounded-full mt-2"
          >
            <div className="h-full bg-green-500 rounded-full"></div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-lg p-4 shadow-sm"
        >
          <div className="text-sm text-gray-600 mb-2">ROI Increase</div>
          <div className="text-2xl font-bold text-blue-600">+250%</div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '90%' }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-2 bg-blue-200 rounded-full mt-2"
          >
            <div className="h-full bg-blue-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Activity Feed */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="text-sm text-gray-600 mb-3">Recent AI Actions</div>
        <div className="space-y-2">
          {[
            { action: 'Generated email campaign', time: '2 min ago', status: 'success' },
            { action: 'Optimized ad targeting', time: '5 min ago', status: 'success' },
            { action: 'Created social media posts', time: '8 min ago', status: 'processing' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-700">{item.action}</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">{item.time}</span>
                <div className={`w-2 h-2 rounded-full ${
                  item.status === 'success' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const AnimatedContentGen = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-6">
      <div className="bg-white rounded-lg p-4 shadow-sm h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">AI Content Generator</h3>
          <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
            ✨ AI Powered
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 mb-2 block">Campaign Type</label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-700">
              Email Marketing Campaign
            </div>
          </div>
          
          <div>
            <label className="text-sm text-gray-600 mb-2 block">Generated Content</label>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-lg p-4 min-h-[120px]"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 2 }}
                className="space-y-2"
              >
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="text-gray-700 text-sm leading-relaxed"
              >
                "🚀 Supercharge your marketing with AI! Our latest features help you create 
                compelling campaigns that convert. Get 50% more engagement with smart targeting..."
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="flex space-x-2"
          >
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
              Use Content
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Regenerate
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )

  const AnimatedAutomation = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6">
      <div className="bg-white rounded-lg p-4 shadow-sm h-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Automation Workflow</h3>
        
        <div className="space-y-4">
          {[
            { step: 'Trigger: New Lead', status: 'completed', delay: 0.5 },
            { step: 'AI Analysis: Lead Scoring', status: 'completed', delay: 1 },
            { step: 'Generate: Personalized Email', status: 'active', delay: 1.5 },
            { step: 'Schedule: Follow-up Sequence', status: 'pending', delay: 2 },
            { step: 'Track: Engagement Metrics', status: 'pending', delay: 2.5 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay }}
              className="flex items-center space-x-3"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                item.status === 'completed' 
                  ? 'bg-green-100 text-green-700' 
                  : item.status === 'active'
                  ? 'bg-blue-100 text-blue-700 animate-pulse'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {item.status === 'completed' ? '✓' : index + 1}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-medium ${
                  item.status === 'completed' ? 'text-green-700' : 
                  item.status === 'active' ? 'text-blue-700' : 'text-gray-500'
                }`}>
                  {item.step}
                </div>
              </div>
              {item.status === 'active' && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDemo = () => {
    switch (activeDemo) {
      case 'dashboard':
        return <AnimatedDashboard />
      case 'content':
        return <AnimatedContentGen />
      case 'automation':
        return <AnimatedAutomation />
      default:
        return <AnimatedDashboard />
    }
  }

  return (
    <section id="demo" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See ADmyBRAND AI{' '}
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the power of AI-driven marketing with our interactive demo. 
            Watch how our platform transforms your marketing workflow.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => setIsVideoModalOpen(true)}
            className="mb-8"
          >
            🎥 Watch Full Demo Video
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Interactive Features
            </h3>
            
            {demoFeatures.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveDemo(feature.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  activeDemo === feature.id
                    ? 'glass ring-2 ring-primary-500 bg-primary-50'
                    : 'glass hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <div className="font-medium text-gray-900">{feature.title}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {renderDemo()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to experience the future of marketing?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your free trial today and see how AI can transform your marketing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Personal Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="ADmyBRAND AI Suite Demo"
        size="xl"
      >
        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
            <p className="text-gray-300 mb-6">
              Experience the full power of ADmyBRAND AI Suite
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Click play to start the demo video
            </p>
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default Demo