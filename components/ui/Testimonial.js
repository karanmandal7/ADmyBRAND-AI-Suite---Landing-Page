'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from './Card'

const Testimonial = ({ quote, name, role, company, avatar, photo, rating = 5 }) => {
  return (
    <Card className="p-6 h-full">
      <div className="flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <blockquote className="text-gray-700 mb-6 flex-grow">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full mr-4 overflow-hidden ring-2 ring-white shadow-lg">
            {photo ? (
              <Image
                src={photo}
                alt={`${name} profile photo`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                {avatar || name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{role}</div>
            {company && <div className="text-sm text-gray-500">{company}</div>}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Testimonial