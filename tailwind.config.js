/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        buttonPrimary: "#007bff",
        secondary: "#0056b3",
        alerts: "#28a745",
        vertVif: "#28a745",
        textPrimary: "#343a40",
        primary: "#ffffff",
        grisClair: "#f8f9fa",
      },
    },
  },
  plugins: [],
};
