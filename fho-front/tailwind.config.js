/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      md: "744px",
      lg: "1400px",
    },
    container: {
      padding: {
        DEFAULT: "20px",
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./__error.vue",
  ],
};
