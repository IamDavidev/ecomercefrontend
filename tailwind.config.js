module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    colors: {
      "primary-orange": 'hsl(26, 100%, 50%)',
      "pale-orange": 'hsl(25,100% , 94%)',
      "vark-blue": 'hsl(220,13%,13%',
      "dark-gravish-blue": "hsl(219,9%,45%)",
      "gravish-blue": "hsl(219,14%,75%)",
      "line-gravish-blue": "hsl(219,64%,98%)",
      "white": 'hsl(0,0%,100%)',
      "dark": 'hsl(0,0%,75%)',
    }
  },
  plugins: [],
}
