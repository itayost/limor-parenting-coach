import React from 'react'
import { HeartHandshake, Users, Star } from 'lucide-react'
import SectionTitle from './common/SectionTitle'

const Services = () => {
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
        <SectionTitle 
          title="השירותים שלי" 
          subtitle="הנחייה פרטנית וקבוצתית באווירה לבבית" 
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-lg text-brown mb-4">
            כל מפגש מותאם באופן אישי לצרכים שלכם
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <InfoBadge text="מפגשים פרונטליים" />
            <InfoBadge text="מפגשים מקוונים" />
            <InfoBadge text="זמינות גבוהה" />
          </div>
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, description, features, color, index }) => (
  <div 
    className={`card-kindergarten bg-cream relative ${
      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
    } hover:rotate-0 transition-all duration-300`}
  >
    {/* Icon Badge */}
    <div className={`absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center ${color} text-white shadow-lg`}>
      {icon}
    </div>
    
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-3 text-brown">{title}</h3>
      <p className="mb-4 text-brown">{description}</p>
      
      <div className="space-y-2">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <Star className="w-4 h-4 text-tan fill-tan" />
            <span className="text-sm text-brown">{feature}</span>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-2 rounded-full bg-beige text-brown font-medium hover:bg-light-tan transition-colors">
        למידע נוסף
      </button>
    </div>
  </div>
)

const InfoBadge = ({ text }) => (
  <div className="px-4 py-2 rounded-full bg-beige text-brown text-sm font-medium">
    {text}
  </div>
)

export default Services