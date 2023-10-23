/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marine: 'hsl(213, 96%, 18%)',
        prplish: 'hsl(243, 100%, 62%)',
        paster: 'hsl(228, 100%, 84%)',
        strawberry: 'hsl(354, 84%, 57%)',
        cool: 'hsl(231, 11%, 63%)',
        light: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
      },
    },
  },
  plugins: [],
};
