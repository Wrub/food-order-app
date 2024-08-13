/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Orange
        "main-orange": "#F83B01",
        "orange-80%": "#F96234",
        "orange-50%": "#f89d80",
        "orange-20%": "#FED8CC",
        // Yellow
        "main-yellow": "#FE8800",
        "yellow-80%": "#fea033",
        "yellow-50%": "#fec380",
        "yellow-20%": "#ffe7cc",
        // Black
        "main-black": "#0B0C17",
        "black-80%": "#32354E",
        "black-50%": "#494C61",
        "black-20%": "#767989",
        // Gray
        "main-gray": "#A4A5B0",
        "gray-80%": "#B6B7C0",
        "gray-50%": "#D1D2D7",
        "gray-20%": "#EDEDEF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5em",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
