// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#faf9f1',
        'tan': '#cca47f',
        'light-tan': '#ddbc9b',
        'beige': '#f5e9db',
        'brown': '#7d5a50',
        'red-accent': '#c6302c',
        'whatsapp': '#25D366'
      },
      fontFamily: {
        'hebrew': ['Rubik', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slide-in-bottom': 'slideInBottom 0.5s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'pop': 'pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'shake': 'shake 0.5s ease-in-out',
        'draw': 'draw 2s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': { 
            transform: 'scale(1.05)'
          },
          '70%': { 
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInBottom: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100%)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        rotateIn: {
          '0%': { 
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)'
          },
          '100%': { 
            opacity: '1',
            transform: 'rotate(0) scale(1)'
          }
        },
        pop: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0)'
          },
          '60%': { 
            transform: 'scale(1.1)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
        },
        draw: {
          '0%': { 
            strokeDasharray: '1000',
            strokeDashoffset: '1000'
          },
          '100%': { 
            strokeDashoffset: '0'
          }
        }
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
}