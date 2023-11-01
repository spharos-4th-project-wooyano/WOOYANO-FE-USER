import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'background': 'bg-[#121212]',
      },

      colors: {
          'background1': '#1A202C',
          'background2':'#2D3748',
          'background3':'#3C4B5A'
        },

      fontFamily:{
        'baloo-da':['baloo-da']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    theme:{
      ligth:{
        layout:{},
        colors:{}
      },
      dark:{
        layout:{},
        colors:{}
      }
    }
    })],
}
export default config
