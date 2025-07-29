'use client'

import { motion } from 'framer-motion'
import Accordion from '../ui/Accordion'

const FAQ = () => {
  const faqItems = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI uses advanced natural language processing to understand your brand voice, target audience, and campaign goals. It then generates high-quality content including social media posts, email campaigns, blog articles, and ad copy that aligns with your brand guidelines and marketing objectives."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Yes! ADmyBRAND AI Suite integrates with over 50 popular marketing platforms including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, LinkedIn, and many more. Our API also allows for custom integrations to fit your specific workflow needs."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also offer onboarding assistance, training resources, webinars, and a detailed knowledge base to help you get the most out of our platform."
    },
    {
      question: "Is my data secure with ADmyBRAND?",
      answer: "Absolutely. We take data security very seriously and implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, GDPR compliance, regular security audits, and secure data centers. Your data is never shared with third parties and you maintain full ownership of your content and customer data."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access to your account until the end of your current billing period. We also offer a 14-day free trial so you can test all features before committing to a paid plan."
    },
    {
      question: "How accurate is the AI targeting and analytics?",
      answer: "Our AI algorithms are trained on millions of data points and continuously learn from campaign performance. We typically see 85-95% accuracy in audience targeting and our predictive analytics have helped customers improve their ROI by an average of 250%. The system gets more accurate over time as it learns from your specific audience and campaign data."
    },
    {
      question: "Do you offer custom solutions for enterprise clients?",
      answer: "Yes, we offer fully customizable enterprise solutions including white-label options, custom AI model training, dedicated infrastructure, advanced security features, custom integrations, and dedicated account management. Contact our sales team to discuss your specific enterprise needs."
    },
    {
      question: "What's included in the free trial?",
      answer: "The 14-day free trial includes full access to all Professional plan features including AI content generation, automation workflows, analytics dashboard, A/B testing, and integrations. No credit card is required to start your trial, and you can upgrade or cancel at any time during the trial period."
    }
  ]

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to reach out to our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                Contact Support
              </button>
              <button className="glass text-primary-700 hover:bg-white/20 border border-primary-200 px-6 py-3 rounded-lg font-medium transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ