module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('assets/images/futuristic-background.png')",
        "layout-header-one": "url('assets/images/layout-header-one.png')",
        "dog-card-footer-label":
          "url('assets/images/dog-card-footer-label.png')",
        "dog-card-label": "url('assets/images/dog-card-label.png')",
      },

      colors: {
        yellow: "#F1C004",
      },
    },
    fontFamily: {
      festive: ["Festive", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
