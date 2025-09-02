import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionTitle from './common/SectionTitle'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "דנה כ.",
      childAge: "אמא לילדה בת 7",
      text: "לימור שינתה לנו את החיים בבית. קיבלנו כלים מעשיים להתמודדות עם התפרצויות זעם, והיום האווירה בבית רגועה ונעימה הרבה יותר.",
      rating: 5
    },
    {
      name: "יעל ומיכאל ש.",
      childAge: "הורים לשלושה ילדים",
      text: "ההדרכה של לימור עזרה לנו להבין את הילדים שלנו טוב יותר ולבנות איתם קשר עמוק יותר. הגישה החמה והמקצועית שלה עשתה את ההבדל.",
      rating: 5
    },
    {
      name: "רונית ב.",
      childAge: "אמא לנער בן 14",
      text: "בזכות לימור למדנו איך לתקשר עם הבן שלנו בגיל ההתבגרות. היא נתנה לנו כלים להתמודד עם האתגרים של הגיל הזה בצורה מכבדת ואוהבת.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container mx-auto">
        <SectionTitle 
          title="מה הורים אומרים" 
          subtitle="סיפורי הצלחה של משפחות שליוויתי" 
        />
        
        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="card-kindergarten bg-beige relative">
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-tan opacity-30" />
            
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            {/* Text */}
            <p className="text-lg text-brown text-center mb-6 leading-relaxed px-8">
              "{testimonials[currentIndex].text}"
            </p>
            
            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-brown">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-tan">{testimonials[currentIndex].childAge}</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-beige hover:bg-light-tan transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-5 h-5 text-brown" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-red-accent w-6' 
                      : 'bg-tan opacity-50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-beige hover:bg-light-tan transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-brown" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-tan">30+</div>
            <div className="text-sm text-brown">שנות ניסיון</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tan">500+</div>
            <div className="text-sm text-brown">משפחות מרוצות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tan">100%</div>
            <div className="text-sm text-brown">גישה מקצועית</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials