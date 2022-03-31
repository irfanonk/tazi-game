const defaultTheme = require("tailwindcss/defaultTheme");
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
        bgblue: "#00092E",
      },
    },

    fontSize: {
      xs: "10px",
      s: "15px",
      sm: "17px",
      m: "22px",
      md: "25px",
      l: "30px",
      xl: "45px",
      xxl: "60px",
    },
  },
  plugins: [],
};
