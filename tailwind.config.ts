import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
      
      screens: {
        sm: '36rem',
        md: '42rem',
        lg: '56rem',
        xl: '72rem',
      },
    
    },
    extend: {
      padding: {
        '1/10': '10%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        arbutus: ["var(--font-arbutus)"]
      },
      colors: {
        brown: '#755B3E',
        darkbrown: "#54422e",
        yellow: "#B29600",
        light_blue: "#91D8F7",
        blue: "#0098DA",
        pink: "#cc3bb1",
        dark_yellow: "#857001",
        dark_blue_black: "#343a40", 
        gray: "rgba(0, 0, 0, 0.6)",
      },
      inset: {
        "1/20": "5%",
      },
      letterSpacing: {
        widest: '.25em'
      }
      

    },
  },
  plugins: [],
}
export default config
