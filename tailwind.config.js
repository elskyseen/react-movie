/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "linear-gradient(rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.28) 38%,rgba(0,0,0,1) 100%),url('/src/assets/bg.jpg')",
      },
      colors: {
        primary: "#3DA694",
        secondary: "#060101",
      },
    },
  },
  plugins: [],
};
