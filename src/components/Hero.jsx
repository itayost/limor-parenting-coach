import React from 'react'
import { MessageCircle, Users, Star, Heart, Smile } from 'lucide-react'
import { CloudDecoration, StarDecoration, HeartDecoration } from './decorations'
import limorPhoto from '../assets/images/limor.jpg'

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <CloudDecoration className="absolute top-20 left-4 opacity-30 animate-float" />
      <StarDecoration className="absolute top-32 right-8 opacity-40" />
      <HeartDecoration className="absolute bottom-8 left-12 opacity-30" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-brown">
              אומנת הורים 
              <span className="block text-2xl md:text-4xl mt-2 text-tan">
                ומלווה קשיי הורך
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-brown">
              30 שנות ניסיון בחינוך • מורה, יועצת ומדריכה
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/972528487336"
                className="btn-primary bg-red-accent flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                קבעו שיחת היכרות
              </a>
              <a 
                href="#testimonials"
                className="btn-secondary bg-beige text-brown"
              >
                קראו המלצות
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <TrustBadge icon={<Users />} text="גילאי 3-18" />
              <TrustBadge icon={<Star />} text="30 שנות ניסיון" />
              <TrustBadge icon={<Heart />} text="גישה חמה ומקצועית" />
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-full bg-light-tan rotate-slight" />
              <div className="absolute inset-2 rounded-full bg-beige rotate-slight-neg" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white">
                {/* Limor's photo */}
                <img 
                  src={limorPhoto} 
                  alt="לימור ירון-אוון" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements around photo */}
              <div className="absolute -top-4 -right-4 animate-pulse-slow">
                <Star className="w-8 h-8 text-red-accent fill-red-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <Heart className="w-8 h-8 text-tan fill-tan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper Component
const TrustBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-beige">
    <div className="text-tan">{icon}</div>
    <span className="text-sm font-medium text-brown">{text}</span>
  </div>
)

export default Hero