import React from 'react'
import { Baby, Smile, Users, BookOpen, Heart, Home, Shield, Brain } from 'lucide-react'
import SectionTitle from './common/SectionTitle'
import WaveTop from './decorations/WaveTop'

const Topics = () => {
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
        <SectionTitle 
          title="במה אני יכולה לעזור?" 
          subtitle="נושאים מרכזיים בהדרכת הורים" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <TopicCard key={index} {...topic} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-brown mb-6">
            כל משפחה היא עולם ומלואו, ואני כאן כדי ללוות אתכם בדרך הייחודית שלכם
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-red-accent text-white font-bold hover:scale-105 transition-transform shadow-lg"
          >
            בואו נדבר
          </a>
        </div>
      </div>
    </section>
  )
}

const TopicCard = ({ icon, title, color, index }) => {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1']
  const rotation = rotations[index % 4]
  
  return (
    <div 
      className={`rounded-2xl p-4 text-center hover:scale-105 transition-all cursor-pointer bg-cream ${rotation} hover:rotate-0 duration-300`}
    >
      <div 
        className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <h3 className="font-bold text-sm md:text-base text-brown">{title}</h3>
    </div>
  )
}

export default Topics