/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "regal-blue": "#243c5a",
        cyan: "hsl(180, 66%, 49%)",
        darkviolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishvilet: "hsl(257, 7%, 63%)",
        verydarkblue: "hsl(255, 11%, 22%)",
        verydarkviolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
