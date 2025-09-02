// src/components/Hero.jsx
import React, { useEffect, useState } from 'react'
import { MessageCircle, Users, Star, Heart, Smile } from 'lucide-react'
import { CloudDecoration, StarDecoration, HeartDecoration } from './decorations'
import limorPhoto from '../assets/images/limor.jpg'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Decorative Elements with animations */}
      <CloudDecoration className={`absolute top-20 left-4 opacity-30 transition-all duration-1000 ${
        isLoaded ? 'animate-float' : 'opacity-0 translate-y-10'
      }`} />
      <StarDecoration className={`absolute top-32 right-8 opacity-40 transition-all duration-1000 delay-200 ${
        isLoaded ? 'animate-pulse-slow' : 'opacity-0'
      }`} />
      <HeartDecoration className={`absolute bottom-8 left-12 opacity-30 transition-all duration-1000 delay-300 ${
        isLoaded ? 'animate-float' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content with staggered animations */}
          <div className="flex-1 text-center lg:text-right">
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 leading-tight text-brown transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              אומנת הורים 
              <span className={`block text-2xl md:text-4xl mt-2 text-tan transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                ומלווה קשיי הורך
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-6 text-brown transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              30 שנות ניסיון בחינוך • מורה, יועצת ומדריכה
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a 
                href="https://wa.me/972528487336"
                className="btn-primary bg-red-accent flex items-center justify-center gap-2 hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                קבעו שיחת היכרות
              </a>
              <a 
                href="#testimonials"
                className="btn-secondary bg-beige text-brown hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                קראו המלצות
              </a>
            </div>

            {/* Trust Badges with pop animation */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              {[
                { icon: <Users />, text: "גילאי 3-18", delay: "delay-500" },
                { icon: <Star />, text: "30 שנות ניסיון", delay: "delay-600" },
                { icon: <Heart />, text: "גישה חמה ומקצועית", delay: "delay-700" }
              ].map((badge, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-beige transition-all duration-700 ${badge.delay} ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  } hover:scale-110 hover:shadow-lg`}
                >
                  <div className="text-tan">{badge.icon}</div>
                  <span className="text-sm font-medium text-brown">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image with rotation animation */}
          <div className="flex-1 relative">
            <div className={`relative mx-auto w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'
            }`}>
              {/* Decorative frame with subtle animation */}
              <div className="absolute inset-0 rounded-full bg-light-tan rotate-slight animate-pulse-slow" />
              <div className="absolute inset-2 rounded-full bg-beige rotate-slight-neg" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white group">
                <img 
                  src={limorPhoto} 
                  alt="לימור ירון-אוון" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Decorative elements with bounce animation */}
              <div className={`absolute -top-4 -right-4 transition-all duration-700 delay-800 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}>
                <Star className="w-8 h-8 text-red-accent fill-red-accent animate-pulse-slow" />
              </div>
              <div className={`absolute -bottom-4 -left-4 transition-all duration-700 delay-900 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}>
                <Heart className="w-8 h-8 text-tan fill-tan animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero