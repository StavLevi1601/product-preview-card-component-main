/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Use Montserrat as the sans-serif font
        serif: ["Fraunces", "serif"], // Use Fraunces as the serif font
      },
      textShadow: {
        default: "2px 3px #000000",
        // add more custom text shadows here
      },
    },
  },
  plugins: [],
};
