'use client'

import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300'
  
  const variants = {
    default: 'glass shadow-lg hover:shadow-xl',
    solid: 'bg-white shadow-lg hover:shadow-xl border border-gray-200',
    gradient: 'bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-lg border border-white/30 shadow-xl',
    dark: 'glass-dark shadow-lg hover:shadow-xl'
  }
  
  const hoverEffect = hover ? 'hover:-translate-y-1' : ''
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverEffect} ${className}`
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card