// src/components/Testimonials.jsx
import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionTitle from './common/SectionTitle'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 })
  
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
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section id="testimonials" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`transition-all duration-700 transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <SectionTitle 
            title="מה הורים אומרים" 
            subtitle="סיפורי הצלחה של משפחות שליוויתי" 
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Card with slide animation */}
          <div className={`card-kindergarten bg-beige relative overflow-hidden transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Quote Icon */}
            <Quote className={`absolute top-4 right-4 w-8 h-8 text-tan opacity-30 transition-all duration-500 ${
              isAnimating ? 'scale-0 rotate-180' : 'scale-100 rotate-0'
            }`} />
            
            {/* Content wrapper with fade transition */}
            <div className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              {/* Stars with bounce animation */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 text-yellow-400 fill-yellow-400 transition-all duration-300 ${
                      isAnimating ? 'scale-0' : 'scale-100'
                    } ${!isAnimating && sectionVisible ? 'animate-bounce-in' : ''}`}
                    style={{ 
                      transitionDelay: `${i * 50}ms`,
                      animationDelay: `${i * 100}ms`
                    }}
                  />
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
          </div>
          
          {/* Navigation with fade animation */}
          <div className={`flex justify-center gap-4 mt-6 transition-all duration-700 delay-400 ${
            sectionVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-beige hover:bg-light-tan hover:scale-110 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-5 h-5 text-brown" />
            </button>
            
            {/* Dots with pulse animation */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setTimeout(() => {
                        setCurrentIndex(index)
                        setIsAnimating(false)
                      }, 300)
                    }
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-red-accent w-6 h-2 animate-pulse' 
                      : 'bg-tan opacity-50 w-2 h-2 hover:opacity-75'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-beige hover:bg-light-tan hover:scale-110 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-brown" />
            </button>
          </div>
        </div>

        {/* Trust Indicators with count-up animation */}
        <div className={`flex flex-wrap justify-center gap-8 mt-12 transition-all duration-700 delay-600 ${
          sectionVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {[
            { value: "30+", label: "שנות ניסיון" },
            { value: "500+", label: "משפחות מרוצות" },
            { value: "100%", label: "גישה מקצועית" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-500 hover:scale-110 ${
                sectionVisible ? 'translate-y-0' : 'translate-y-10'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-tan">{stat.value}</div>
              <div className="text-sm text-brown">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials