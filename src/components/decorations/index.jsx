// src/components/decorations/index.js
import React from 'react'

export const CloudDecoration = ({ className = '' }) => (
  <svg className={className} width="120" height="80" viewBox="0 0 120 80" fill="none">
    <ellipse cx="40" cy="50" rx="25" ry="20" fill="#ddbc9b" opacity="0.5"/>
    <ellipse cx="60" cy="45" rx="30" ry="25" fill="#f5e9db" opacity="0.6"/>
    <ellipse cx="80" cy="50" rx="25" ry="20" fill="#ddbc9b" opacity="0.5"/>
  </svg>
)

export const StarDecoration = ({ className = '' }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" 
      fill="#cca47f" opacity="0.6"/>
  </svg>
)

export const HeartDecoration = ({ className = '' }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 35.5L17.5 33.25C8 24.72 2 19.56 2 13C2 7.84 6.05 3.75 11.2 3.75C14.14 3.75 17 5.08 20 7.24C23 5.08 25.86 3.75 28.8 3.75C33.95 3.75 38 7.84 38 13C38 19.56 32 24.72 22.5 33.25L20 35.5Z" 
      fill="#c6302c" opacity="0.4"/>
  </svg>
)

export const WaveTop = () => (
  <div className="absolute top-0 left-0 right-0 h-8 -mt-8">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
      <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" 
        fill="#f5e9db"/>
    </svg>
  </div>
)

export default {
  CloudDecoration,
  StarDecoration,
  HeartDecoration,
  WaveTop
}