import React from 'react'
import { Heart, MessageCircle, Phone } from 'lucide-react'
import CloudDecoration from './decorations/CloudDecoration'
import StarDecoration from './decorations/StarDecoration'

const CTA = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-beige">
      <CloudDecoration className="absolute top-8 right-12 opacity-20" />
      <StarDecoration className="absolute bottom-8 left-8 opacity-30" />
      
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto rounded-3xl p-8 md:p-12 shadow-xl relative bg-cream">
          
          <Heart className="w-16 h-16 mx-auto mb-6 text-red-accent fill-red-accent animate-pulse-slow" />
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brown">
            כולנו הורים שעושים את הטוב ביותר!
          </h2>
          
          <p className="text-lg mb-8 text-brown">
            לפעמים כמה כלים חדשים יכולים לעשות שינוי אמיתי
          </p>

          <div className="bg-beige rounded-2xl p-6 mb-8">
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
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg bg-whatsapp"
            >
              <MessageCircle className="w-6 h-6" />
              שלחו הודעת WhatsApp
            </a>
            
            <a 
              href="tel:0528487336"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg bg-light-tan text-brown"
            >
              <Phone className="w-6 h-6" />
              052-8487336
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-beige">
            <p className="text-sm text-tan mb-2">שעות פעילות</p>
            <p className="text-brown">ימים א׳-ה׳ | 9:00-20:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA