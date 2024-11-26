/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      "light-gray": '#e4e0db',
      "dark-gray": "rgba(13, 14, 19, .6)",
      "dark-blue": "#0d0e13",
      'sand': "#e0ccbb",
      'black': "#000",
      'white': "#f8f8f8",
      "sand-4": "#e3e0db",
      "sand-6": " hsla(28, 37%, 81%, .6)",
      "sand-8": "hsla(28, 37%, 81%, .8)",
    },
    fontFamily: {
      Lausanne: ["Lausanne", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
