/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using the App Router
    "./src/**/*.{js,ts,jsx,tsx}", // include this if your project is inside /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
