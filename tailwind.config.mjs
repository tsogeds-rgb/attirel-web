/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F7',
        ink: '#1A1A1A',
        smoke: '#6B6B6B',
        plum: {
          DEFAULT: '#5D3A6B',
          dark: '#472B52',
          light: '#F3EDF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        article: '720px',
      },
    },
  },
  plugins: [],
};
