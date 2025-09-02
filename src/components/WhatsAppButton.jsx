import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    
    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
          {/* Tooltip */}
          {showTooltip && (
            <div className="bg-white rounded-lg shadow-lg p-3 relative animate-fade-in">
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-brown rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <p className="text-sm text-brown whitespace-nowrap">
                היי! יש לך שאלה? 👋
              </p>
            </div>
          )}
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/972528487336?text=היי%20לימור,%20אשמח%20לשמוע%20עוד%20על%20ההדרכת%20הורים"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform bg-whatsapp animate-pulse-slow group relative"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" fill="white" />
            
            {/* Pulse effect */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-30 animate-ping"></span>
          </a>
        </div>
      )}
    </>
  )
}

export default WhatsAppButton