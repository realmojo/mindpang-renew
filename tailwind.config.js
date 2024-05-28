/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: [
    //   {
    //     companytheme: {
    //       primary: "#5C8374",
    //       secondary: "#9EC8B9",
    //       accent: "#1B4242",
    //       neutral: "#092635",
    //     },
    //   },
    // ],
  },
};
