/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-grey": "#1F2025",
      "input-grey": "#2E2E2E",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
