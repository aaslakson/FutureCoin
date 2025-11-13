/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "surface-dark": "#1A2E20",
        "surface-light": "#FFFFFF",
        "text-light-primary": "#111813",
        "text-dark-primary": "#E0E0E0",
        "text-light-secondary": "#6B7280",
        "text-dark-secondary": "#9db9a6",
        "border-light": "#E5E7EB",
        "border-dark": "#28392e",
        "positive": "#0bda43",
        "negative": "#FF4D4D"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}
