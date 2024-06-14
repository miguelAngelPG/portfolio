import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        AileronBlack: ["Aileron Black", "sans-serif"],
        AileronBold: ["Aileron Bold", "sans-serif"],
        AileronHeavy: ["Aileron Heavy", "sans-serif"],
        AileronRegular: ["Aileron Regular", "sans-serif"],
        AileronThin: ["Aileron Thin", "sans-serif"],
        AileronLight: ["Aileron Light", "sans-serif"],
      },
      colors: {
        'blue-main': '#00ABF0',
        'blue-light': '#F6FDFF',
        'blue-dark': '#051114',
        'blue-gray-light': '#92CBD8',
        'blue-gray-dark': '#1B4E5A',
        'linkedin': '#0284c7',
        'whatsapp': '#25D366',
        'telegram': '#23a1df',
      },
      boxShadow: {
        'social-link': '0 0 0 2px #e5e7eb',
        'social-link-dark': '0 0 0 2px #374151',
        'social-link-hover': '0 0 0 4px #e5e7eb',
        'social-link-hover-dark': '0 0 0 4px #374151',
      },
      animation: {
        slideInTop: 'slideInTop 1s ease-in-out 0.5s forwards',
        slideOutBottom: 'slideOutBottom 1s ease-in-out forwards',
        slideInLeft: 'slideInLeft 1s ease-in-out 1s forwards',
        slideOutRight: 'slideOutRight 1s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out .5s forwards',
        fadeOut: 'fadeOut 1s ease-in-out forwards',
        fadeInLanguge: 'fadeIn 0.5s ease-in-out forwards',
        fadeOutLanguge: 'fadeOut 0.5s ease-in-out forwards',
        accordionOpen: 'accordionOpen 0.5s ease-in-out forwards',
        accordionClose: 'accordionClose 0.5s ease-in-out forwards',
      },
      keyframes: {
        accordionOpen: {
          '0%': { height: '0px', },
          '100%': { height: '100px' }
        },
        accordionClose: {
          '0%': { height: '100px' },
          '100%': { height: '0px' }
        },
        slideInTop: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(80%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        slideOutBottom: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '25%': { opacity: '0' },
          '100%': { transform: 'translateY(100%)', opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
};
export default config;
