// src/components/Topics.jsx
import React from 'react'
import { Baby, Smile, Users, BookOpen, Heart, Home, Shield, Brain } from 'lucide-react'
import SectionTitle from './common/SectionTitle'
import { WaveTop } from './decorations'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Topics = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.3 })

  const topics = [
    { icon: <Shield className="w-6 h-6" />, title: "משמעת וגבולות", color: '#cca47f' },
    { icon: <Smile className="w-6 h-6" />, title: "ביטחון עצמי", color: '#c6302c' },
    { icon: <Users className="w-6 h-6" />, title: "יחסי אחים", color: '#ddbc9b' },
    { icon: <BookOpen className="w-6 h-6" />, title: "התמודדות בבית ספר", color: '#7d5a50' },
    { icon: <Heart className="w-6 h-6" />, title: "קשיים רגשיים", color: '#cca47f' },
    { icon: <Brain className="w-6 h-6" />, title: "קשיים התנהגותיים", color: '#c6302c' },
    { icon: <Home className="w-6 h-6" />, title: "אסטרטגיות להורים", color: '#ddbc9b' },
    { icon: <Baby className="w-6 h-6" />, title: "גיל ההתבגרות", color: '#7d5a50' }
  ]

  return (
    <section id="topics" className="section-padding bg-beige relative">
      <WaveTop />
      
      <div className="container mx-auto">
        <div ref={titleRef} className={`transition-all duration-700 transform ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <SectionTitle 
            title="במה אני יכולה לעזור?" 
            subtitle="נושאים מרכזיים בהדרכת הורים" 
          />
        </div>
        
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <TopicCard 
              key={index} 
              {...topic} 
              index={index} 
              isVisible={gridVisible}
            />
          ))}
        </div>

        <div ref={ctaRef} className={`mt-12 text-center transition-all duration-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className={`text-lg text-brown mb-6 transition-all duration-700 delay-100 ${
            ctaVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            כל משפחה היא עולם ומלואו, ואני כאן כדי ללוות אתכם בדרך הייחודית שלכם
          </p>
          <a 
            href="#contact"
            className={`inline-block px-8 py-3 rounded-full bg-red-accent text-white font-bold hover:scale-110 hover:shadow-2xl transition-all duration-500 ${
              ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            בואו נדבר
          </a>
        </div>
      </div>
    </section>
  )
}

const TopicCard = ({ icon, title, color, index, isVisible }) => {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1']
  const rotation = rotations[index % 4]
  
  // Create a wave effect for cards appearing
  const row = Math.floor(index / 2) // For mobile (2 columns)
  const col = index % 2
  const delay = (row * 100) + (col * 50) // Wave animation delay
  
  return (
    <div 
      className={`rounded-2xl p-4 text-center cursor-pointer bg-cream ${rotation} hover:rotate-0 hover:scale-110 hover:shadow-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: isVisible ? undefined : 'scale(0) rotate(180deg)'
      }}
    >
      <div 
        className={`w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-500 ${
          isVisible ? 'rotate-0' : 'rotate-180'
        }`}
        style={{ 
          backgroundColor: `${color}20`,
          transitionDelay: `${delay + 100}ms`
        }}
      >
        <div style={{ color }} className="animate-pulse-slow">{icon}</div>
      </div>
      <h3 className="font-bold text-sm md:text-base text-brown">{title}</h3>
    </div>
  )
}

export default Topics