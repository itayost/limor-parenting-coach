// src/data/siteData.js

const siteData = {
  // Personal Information
  personal: {
    name: 'לימור יער-און',
    title: 'מנחת הורים',
    subtitle: 'הורות מטפחת',
    profession: 'מנחת הורים לילדים בגיל הרך',
    experience: '30 שנות ניסיון בחינוך',
    roles: 'מורה, יועצת ומדריכה',
  },

  // Contact Information
  contact: {
    phone: '052-8484336',
    phoneFormatted: '0528484336', // For tel: links
    whatsappNumber: '972528484336', // International format for WhatsApp
    email: 'limoryo4@gmail.com',
  },

  // Social Links (set to null when not available)
  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
  },

  // Business Hours
  businessHours: {
    days: 'ימים א׳-ה׳',
    hours: '9:00-20:00',
  },

  // Services & Features
  features: [
    'גילאי 3-18',
    '30 שנות ניסיון',
    'גישה חמה ומקצועית',
    'הנחייה פרטנית וקבוצתית',
  ],

  // WhatsApp Messages
  messages: {
    whatsappDefault: 'היי לימור, אשמח לשמוע עוד על ההדרכת הורים',
    whatsappCTA: 'היי! יש לך שאלה? 👋',
  },

  // Meta Information (for SEO)
  meta: {
    title: 'לימור יער-און - מנחת הורים | הורות מטפחת',
    description: 'מנחת הורים מוסמכת עם 30 שנות ניסיון בחינוך. הדרכה פרטנית וקבוצתית להורים לילדים בגילאי 3-18.',
    keywords: 'הדרכת הורים, הורות מטפחת, לימור יער-און, ייעוץ חינוכי, גיל הרך',
  },

  // Footer Links
  footerLinks: {
    privacy: '#',
    terms: '#',
    accessibility: '#',
  },

  // Copyright
  copyright: {
    year: new Date().getFullYear(),
    text: 'כל הזכויות שמורות',
    credit: 'עוצב ופותח באהבה על ידי',
    developer: {
      name: 'ItayOst',
      url: 'https://www.itayost.com/'
    }
  },
};

export default siteData;