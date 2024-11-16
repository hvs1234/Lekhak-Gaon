/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        wave: "wave 3s infinite linear",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        wave: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2rem)", boxShadow:"0 2px 10px grey" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
