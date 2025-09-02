import React from 'react'
import { Heart, Facebook, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t bg-cream border-beige">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-beige">
              <Heart className="w-5 h-5 text-red-accent fill-red-accent" />
            </div>
            <div>
              <span className="font-bold text-brown">לימור ירון-אוון</span>
              <span className="mx-2 text-tan">•</span>
              <span className="text-tan">הורות מטפחת</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-brown" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-brown" />
            </a>
            <a 
              href="mailto:limor@example.com" 
              className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-brown" />
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-beige pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <p className="text-tan">
              © 2024 כל הזכויות שמורות
            </p>
            
            {/* Links */}
            <div className="flex gap-6">
              <a href="#" className="text-brown hover:text-tan transition-colors">
                מדיניות פרטיות
              </a>
              <a href="#" className="text-brown hover:text-tan transition-colors">
                תנאי שימוש
              </a>
              <a href="#" className="text-brown hover:text-tan transition-colors">
                נגישות
              </a>
            </div>
          </div>
        </div>
        
        {/* Credit */}
        <div className="text-center mt-6">
          <p className="text-xs text-tan">
            עוצב ופותח באהבה 💛
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer