// src/components/common/SectionTitle.jsx
import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brown relative inline-block">
        {title}
        {/* Decorative underline */}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-tan rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-tan mt-6">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle