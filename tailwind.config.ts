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
        'blue-light': '#cbe0e5',
        'blue-dark': '#051114',
      },
      animation: {
        slideInTop: 'slideInTop 1s ease-in-out 0.5s forwards',
        slideOutBottom: 'slideOutBottom 1s ease-in-out',
        slideInLeft: 'slideInLeft 1s ease-in-out 1s forwards',
        slideOutRight: 'slideOutRight 1s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out .5s forwards',
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
      keyframes: {
        slideInTop: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
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
