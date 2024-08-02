/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.js', // Adjust this as necessary
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#141414',
        nightlight: '#1f1f1f',
      },
    },
  },
  plugins: [],
};
