// src/components/CTA.jsx
import React from 'react'
import { Heart, MessageCircle, Phone } from 'lucide-react'
import { CloudDecoration, StarDecoration } from './decorations'
import useScrollAnimation from '../hooks/useScrollAnimation'

const CTA = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-beige" ref={sectionRef}>
      <CloudDecoration className={`absolute top-8 right-12 transition-all duration-1000 ${
        sectionVisible ? 'opacity-20 animate-float' : 'opacity-0 translate-y-10'
      }`} />
      <StarDecoration className={`absolute bottom-8 left-8 transition-all duration-1000 delay-200 ${
        sectionVisible ? 'opacity-30 animate-pulse-slow' : 'opacity-0 scale-0'
      }`} />
      
      <div className="container mx-auto text-center">
        <div className={`max-w-2xl mx-auto rounded-3xl p-8 md:p-12 shadow-xl relative bg-cream transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          <Heart className={`w-16 h-16 mx-auto mb-6 text-red-accent fill-red-accent transition-all duration-700 delay-200 ${
            sectionVisible ? 'animate-pulse-slow scale-100' : 'scale-0'
          }`} />
          
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-brown transition-all duration-700 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            כולנו הורים שעושים את הטוב ביותר!
          </h2>
          
          <p className={`text-lg mb-8 text-brown transition-all duration-700 delay-400 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            לפעמים כמה כלים חדשים יכולים לעשות שינוי אמיתי
          </p>

          <div className={`bg-beige rounded-2xl p-6 mb-8 transition-all duration-700 delay-500 ${
            sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-brown mb-4 font-medium">
              אני זמינה עבורכם לשיחת ייעוץ ללא התחייבות
            </p>
            <p className="text-tan text-sm">
              נכיר, נבין את הצרכים שלכם ונראה איך אני יכולה לעזור
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/972528487336"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 bg-whatsapp ${
                sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <MessageCircle className="w-6 h-6 animate-pulse" />
              שלחו הודעת WhatsApp
            </a>
            
            <a 
              href="tel:0528487336"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 bg-light-tan text-brown ${
                sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Phone className="w-6 h-6" />
              052-8487336
            </a>
          </div>
          
          <div className={`mt-8 pt-8 border-t border-beige transition-all duration-700 delay-800 ${
            sectionVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-tan mb-2">שעות פעילות</p>
            <p className="text-brown">ימים א׳-ה׳ | 9:00-20:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA