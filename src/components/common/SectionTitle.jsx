// src/components/common/SectionTitle.jsx
import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brown relative inline-block">
        <span className="relative z-10">{title}</span>
        {/* Animated underline using Tailwind classes */}
        <span 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-tan rounded-full transition-all duration-1000"
          style={{ width: '80px' }}
        ></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-tan mt-6 animate-fade-in">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle