import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          grass: '#5B9B3F',
          dirt: '#866043',
          stone: '#828282',
          wood: '#A0744F',
          leaves: '#3A5F29',
          water: '#2F5299',
          primary: '#4AAF4A',
          secondary: '#6B6B6B',
        },
      },
      fontFamily: {
        minecraft: ['MinecraftFont', 'monospace'],
      },
      boxShadow: {
        'minecraft': '5px 5px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
