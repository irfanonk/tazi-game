module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('assets/images/futuristic-background.png')",
        "layout-header-one": "url('assets/images/layout-header-one.png')",
      },
    },
    fontFamily: {
      festive: ["Festive", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
