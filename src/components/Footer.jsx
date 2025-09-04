import React from 'react'
import { Heart, Facebook, Instagram, Mail, Linkedin, Youtube } from 'lucide-react'
import siteData from '../data/siteData'

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
              <span className="font-bold text-brown">{siteData.personal.name}</span>
              <span className="mx-2 text-tan">•</span>
              <span className="text-tan">{siteData.personal.subtitle}</span>
            </div>
          </div>
          
          {/* Social Links - Only show available ones */}
          <div className="flex gap-4">
            {siteData.social.facebook && (
              <a 
                href={siteData.social.facebook}
                className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-brown" />
              </a>
            )}
            {siteData.social.instagram && (
              <a 
                href={siteData.social.instagram}
                className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-brown" />
              </a>
            )}
            {siteData.social.linkedin && (
              <a 
                href={siteData.social.linkedin}
                className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-brown" />
              </a>
            )}
            {siteData.social.youtube && (
              <a 
                href={siteData.social.youtube}
                className="w-10 h-10 rounded-full bg-beige flex items-center justify-center hover:bg-light-tan transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-brown" />
              </a>
            )}
            {/* Email - Always show */}
            <a 
              href={`mailto:${siteData.contact.email}`}
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
              © {siteData.copyright.year} {siteData.copyright.text}
            </p>
            
            {/* Links */}
            <div className="flex gap-6">
              <a href={siteData.footerLinks.privacy} className="text-brown hover:text-tan transition-colors">
                מדיניות פרטיות
              </a>
              <a href={siteData.footerLinks.terms} className="text-brown hover:text-tan transition-colors">
                תנאי שימוש
              </a>
              <a href={siteData.footerLinks.accessibility} className="text-brown hover:text-tan transition-colors">
                נגישות
              </a>
            </div>
          </div>
        </div>
        
        {/* Credit */}
        <div className="text-center mt-6">
          <p className="text-xs text-tan">
            {siteData.copyright.credit}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer