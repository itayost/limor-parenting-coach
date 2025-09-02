import React, { useState, useEffect } from 'react'
import { Heart, Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg bg-cream' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-beige">
                <Heart className="w-6 h-6 text-red-accent fill-red-accent" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-tan" />
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-brown">לימור ירון-אוון</div>
              <div className="text-xs text-tan">הורות מטפחת</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-beige"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 text-brown" /> : 
              <Menu className="w-6 h-6 text-brown" />
            }
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="hover:scale-105 transition-transform font-medium text-brown hover:text-tan"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-beige">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block py-3 px-4 rounded-lg mb-2 transition-colors bg-beige text-brown hover:bg-light-tan"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar