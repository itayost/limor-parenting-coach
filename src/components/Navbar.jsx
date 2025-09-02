// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Heart, Menu, X, Sparkles, Phone, MessageCircle } from 'lucide-react'
import logo from '../assets/images/logo.png' // Add your logo image here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollPercent = (scrollY / documentHeight) * 100
      setScrollProgress(scrollPercent)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'אודות', href: '#about' },
    { label: 'שירותים', href: '#services' },
    { label: 'נושאים', href: '#topics' },
    { label: 'המלצות', href: '#testimonials' },
    { label: 'צור קשר', href: '#contact' }
  ]

  const handleMenuClick = (href) => {
    setIsMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-accent to-tan z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? 'shadow-2xl bg-cream/95 backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with animation */}
            <div className={`flex items-center gap-2 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <a href="/" className="group">
                <img 
                  src={logo} 
                  alt="לימור יער-און - הורות מטפחת" 
                  className={`transition-all duration-300 ${
                    scrolled ? 'h-12' : 'h-14 md:h-16'
                  } w-auto group-hover:scale-105`}
                />
              </a>
              {/* Optional: Keep text version for very small screens or as fallback */}
              <div className={`hidden transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
                <div className="font-bold text-sm text-brown">לימור יער-און</div>
                <div className="text-xs text-tan">הורות מטפחת</div>
              </div>
            </div>

            {/* Desktop Menu with staggered animation */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.href)
                  }}
                  className={`relative group transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <span className="font-medium text-brown hover:text-tan transition-colors">
                    {item.label}
                  </span>
                  {/* Hover underline animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tan rounded-full transition-all duration-300 group-hover:w-full"></span>
                  {/* Hover emoji */}
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 text-lg">
                    {item.icon}
                  </span>
                </a>
              ))}
              
              {/* CTA Button - Desktop */}
              <a
                href="https://wa.me/972528487336"
                className={`ml-4 px-4 py-2 bg-red-accent text-white rounded-full hover:scale-110 hover:shadow-xl transition-all duration-500 flex items-center gap-2 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button with animation */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg bg-beige relative transition-all duration-500 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              } hover:scale-110 active:scale-95`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 text-brown transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 text-brown transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu with slide animation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-beige space-y-2">
              {menuItems.map((item, index) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg bg-beige text-brown hover:bg-light-tan transition-all duration-300 transform ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-full opacity-0'
                  } active:scale-95`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.href)
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                </a>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className={`flex gap-2 pt-4 border-t border-tan/20 transition-all duration-300 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-10 opacity-0'
              }`} style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}>
                <a
                  href="https://wa.me/972528487336"
                  className="flex-1 px-4 py-3 bg-whatsapp text-white rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="tel:0528487336"
                  className="flex-1 px-4 py-3 bg-red-accent text-white rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">התקשרי</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar