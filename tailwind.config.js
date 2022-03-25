module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('assets/futuristic-background.png')",
        "layout-header-one": "url('assets/layout-header-one.png')",
      },
    },
    fontFamily: {
      festive: ["Festive", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
