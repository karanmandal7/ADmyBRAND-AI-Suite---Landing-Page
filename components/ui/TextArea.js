'use client'

import { useState } from 'react'

const TextArea = ({ 
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  className = '',
  ...props 
}) => {
  const [focused, setFocused] = useState(false)
  
  const textareaClasses = `
    w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none
    ${error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
    }
    ${focused ? 'ring-2 ring-opacity-20' : ''}
    bg-white/80 backdrop-blur-sm
    placeholder-gray-400 text-gray-900
    focus:outline-none
    ${className}
  `
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={rows}
        className={textareaClasses}
        required={required}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default TextArea