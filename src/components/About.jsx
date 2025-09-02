import React from 'react'
import SectionTitle from './common/SectionTitle'
import WaveTop from './decorations/WaveTop'

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-beige">
      <WaveTop />
      
      <div className="container mx-auto">
        <SectionTitle 
          title="קצת עליי" 
          subtitle="30 שנות ניסיון בחינוך ובהדרכת הורים" 
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="card-kindergarten bg-cream relative">
            {/* Paper effect */}
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-accent opacity-20" />
            </div>
            
            <p className="text-lg leading-relaxed mb-6 text-brown">
              במהלך 30 שנות ניסיוני בתחום החינוך, צברתי ידע רב כמורה, יועצת ומדריכה. 
              השילוב בין הידע המקצועי לניסיון האישי כאם, הפך אותי למדריכת הדרך המושלמת להורים.
            </p>
            
            <blockquote className="border-r-4 border-tan pr-4 my-6">
              <p className="text-xl font-bold italic text-tan">
                "כל ההכשרה והניסיון שצברתי באהבה הפכו אותי כיום למדריכת הדרך להורים"
              </p>
            </blockquote>
            
            <p className="text-lg leading-relaxed mb-6 text-brown">
              אני מאמינה שכל הורה עושה את הטוב ביותר שהוא יכול עם הכלים שיש לו.
              התפקיד שלי הוא להעניק לכם כלים נוספים, להרחיב את הראייה ולתת לכם את הביטחון
              להתמודד עם האתגרים היומיומיים של ההורות.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <FeatureBadge text="ניסיון של 30 שנה" />
              <FeatureBadge text="גילאי 3-18" />
              <FeatureBadge text="הנחייה פרטנית וקבוצתית" />
              <FeatureBadge text="גישה חמה ומקצועית" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureBadge = ({ text }) => (
  <div className="px-4 py-2 rounded-full text-sm font-bold bg-light-tan text-brown">
    {text}
  </div>
)

export default About