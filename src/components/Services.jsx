// src/components/Services.jsx
import React from 'react'
import { HeartHandshake, Users, Star } from 'lucide-react'
import SectionTitle from './common/SectionTitle'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.3 })

  const services = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "הנחייה פרטנית",
      description: "מפגשים אישיים המותאמים לצרכים הספציפיים של משפחתכם",
      features: ["התאמה אישית", "סודיות מלאה", "תוצאות מהירות", "ליווי רציף"],
      color: "bg-red-accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "הנחיית קבוצות",
      description: "סדנאות ומפגשים קבוצתיים באווירה חמה ותומכת",
      features: ["למידה משותפת", "תמיכה הדדית", "כלים מעשיים", "חוויה מעצימה"],
      color: "bg-tan"
    }
  ]

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div ref={titleRef} className={`transition-all duration-700 transform ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <SectionTitle 
            title="השירותים שלי" 
            subtitle="הנחייה פרטנית וקבוצתית באווירה לבבית" 
          />
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              index={index} 
              isVisible={cardsVisible}
            />
          ))}
        </div>

        {/* Additional Info with fade animation */}
        <div ref={infoRef} className={`mt-12 text-center transition-all duration-700 ${
          infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-brown mb-4">
            כל מפגש מותאם באופן אישי לצרכים שלכם
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["מפגשים פרונטליים", "מפגשים מקוונים", "זמינות גבוהה"].map((text, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full bg-beige text-brown text-sm font-medium transition-all duration-500 hover:scale-110 hover:shadow-lg ${
                  infoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, description, features, color, index, isVisible }) => (
  <div 
    className={`card-kindergarten bg-cream relative transition-all duration-700 ${
      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
    } hover:rotate-0 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    {/* Icon Badge with bounce animation */}
    <div className={`absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center ${color} text-white shadow-lg transition-all duration-700 ${
      isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
    }`} style={{ transitionDelay: `${300 + index * 200}ms` }}>
      {icon}
    </div>
    
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-3 text-brown">{title}</h3>
      <p className="mb-4 text-brown">{description}</p>
      
      <div className="space-y-2">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-2 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: `${400 + index * 200 + i * 50}ms` }}
          >
            <Star className="w-4 h-4 text-tan fill-tan animate-pulse-slow" />
            <span className="text-sm text-brown">{feature}</span>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-2 rounded-full bg-beige text-brown font-medium hover:bg-light-tan hover:scale-105 transition-all">
        למידע נוסף
      </button>
    </div>
  </div>
)

export default Services