/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFA384",
        },
        secondary: {
          100: "#74BDCB",
        },
        tertiary: {
          100: "#E7F2F8",
        },
        accent: {
          100: "#EFE7BC",
        },
      },
    },
  },
  plugins: [],
};
