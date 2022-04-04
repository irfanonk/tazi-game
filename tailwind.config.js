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
        "breed-info-box-left": "url('assets/images/breed-info-box-left.png')",
        "breed-info-box-right": "url('assets/images/breed-info-box-right.png')",
        greyhound: "url('assets/images/greyhound.png')",
        "dog-card-frame": "url('assets/images/dog-card-frame.png')",
        "dog-card-background":
          "url('assets/images/futuristic-background-dog.png')",
      },

      colors: {
        yellow: "#F1C004",
        bgblue: "#00092E",
      },
    },

    fontFamily: {
      sans: ["Sony_Sketch_EF", ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      xs: "10px",
      s: "15px",
      sm: "17px",
      "2sm": "20px",
      m: "22px",
      md: "25px",
      l: "30px",
      xl: "35px",
      "2xl": "40px",
      "3xl": "45px",
      "4xl": "50px",
      "5xl": "55px",
      "6xl": "60px",
      "7xl": "65px",
      "8xl": "70px",
    },
  },
  plugins: [],
};
