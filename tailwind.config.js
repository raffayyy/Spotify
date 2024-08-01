/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.js', // Adjust this as necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
