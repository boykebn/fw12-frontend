/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter'],
        mulish: ['mulish'],
      },
      backgroundImage: {
        'background' : "url('../images/bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
