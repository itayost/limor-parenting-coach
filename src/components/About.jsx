// src/components/About.jsx
import React from 'react'
import SectionTitle from './common/SectionTitle'
import { WaveTop } from './decorations'
import useScrollAnimation from '../hooks/useScrollAnimation'

const About = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 })
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="about" className="section-padding relative bg-beige" ref={sectionRef}>
      <WaveTop />
      
      <div className="container mx-auto">
        <div className={`transition-all duration-700 transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <SectionTitle 
            title="קצת עליי" 
            subtitle="30 שנות ניסיון בחינוך ובהדרכת הורים" 
          />
        </div>
        
        <div className="max-w-3xl mx-auto" ref={cardRef}>
          <div className={`card-kindergarten bg-cream relative transition-all duration-700 delay-200 transform ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Paper effect with animation */}
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-red-accent transition-all duration-700 delay-400 ${
                cardVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-0'
              }`} />
            </div>
            
            <p className={`text-lg leading-relaxed mb-6 text-brown transition-all duration-700 delay-300 ${
              cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              במהלך 30 שנות ניסיוני בתחום החינוך, צברתי ידע רב כמורה, יועצת ומדריכה. 
              השילוב בין הידע המקצועי לניסיון האישי כאם, הפך אותי למדריכת הדרך המושלמת להורים.
            </p>
            
            <blockquote className={`border-r-4 border-tan pr-4 my-6 transition-all duration-700 delay-400 ${
              cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <p className="text-xl font-bold italic text-tan">
                "כל ההכשרה והניסיון שצברתי באהבה הפכו אותי כיום למדריכת הדרך להורים"
              </p>
            </blockquote>
            
            <p className={`text-lg leading-relaxed mb-6 text-brown transition-all duration-700 delay-500 ${
              cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              אני מאמינה שכל הורה עושה את הטוב ביותר שהוא יכול עם הכלים שיש לו.
              התפקיד שלי הוא להעניק לכם כלים נוספים, להרחיב את הראייה ולתת לכם את הביטחון
              להתמודד עם האתגרים היומיומיים של ההורות.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                "ניסיון של 30 שנה",
                "גילאי 3-18",
                "הנחייה פרטנית וקבוצתית",
                "גישה חמה ומקצועית"
              ].map((text, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-bold bg-light-tan text-brown transition-all duration-500 hover:scale-110 hover:shadow-lg ${
                    cardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About