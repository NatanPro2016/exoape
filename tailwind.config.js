/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      "light-gray": "#e4e0db",
      "light-gray-02": "hsla(33, 14%, 88%, .2)",
      "light-gray-06": "hsla(33, 14%, 88%, .6)",
      "light-gray-08": " hsla(33, 14%, 88%, .8)",
      "dark-gray": "rgba(13, 14, 19, .6)",
      "dark-grey-02":" rgba(13, 14, 19, .2)",
    "dark-grey-04":" rgba(13, 14, 19, .4)",
    "dark-grey-06":" rgba(13, 14, 19, .6)",
    "dark-grey-08":" rgba(13, 14, 19, .8)",
      "dark-blue": "#0d0e13",
      "sand": "#e0ccbb",
      "black": "#000",
      "white": "#f8f8f8",
      "sand-4": "#e3e0db",
      "sand-6": "hsla(28, 37%, 81%, .6)",
      "sand-8": "hsla(28, 37%, 81%, .8)",
    },
    fontFamily: {
      Lausanne: ["Lausanne", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
