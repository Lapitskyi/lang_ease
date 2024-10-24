import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'silver': '#DFE1E6',
        'dark': '#0D0D12',
        'raven': '#666D80',
        'navy_blue':'#0155FF',
        'auth':'0px 16px 2px 0px rgba(13, 13, 18, 0.06)',
        'auth1':'0px 16px 32px -12px  rgba(88, 92, 95, 0.1)',
        'light-white':'#F8F9FB'
      },
      backgroundImage: {
        'background_auth': 'url("/images/background_auth.png")',
      }
    },
  },
  plugins: [],
};
export default config;
