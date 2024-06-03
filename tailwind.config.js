/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customgreen: {
          100: "#eaf2ea",
          200: "#f3faf1",
          300: "#dceedc",
          700: "#4e8750",
          800: "#3a643b",
        },
        customgray: {
          200: "#bdbdbd",
          300: "#cdcdcd",
          400: "#8d8d8d",
          500: "#7b7b7b",
          700: "#474747",
        },
        customyellow: {
          200: "#fff7e2",
        },
        customred: {
          500: "#d85454",
        },
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
