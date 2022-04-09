const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background":
          "url('/src/assets/images/futuristic-background.png')",
        "layout-header-one": "url('/src/assets/images/layout-header-one.png')",
        "dog-card-footer-label":
          "url('/src/assets/images/dog-card-footer-label.png')",
        "dog-card-label": "url('/src/assets/images/dog-card-label.png')",
        "breed-info-box-left":
          "url('/src/assets/images/breed-info-box-left.png')",
        "breed-info-box-right":
          "url('/src/assets/images/breed-info-box-right.png')",
        greyhound: "url('/src/assets/images/greyhound.png')",
        "dog-card-frame": "url('/src/assets/images/dog-card-frame.png')",
        "dog-card-background":
          "url('/src/assets/images/futuristic-background-dog.png')",
      },

      colors: {
        yellow: "#F1C004",
        bgblue: "#00092E",
      },
    },

    fontFamily: {
      sans: ["Sony_Sketch_EF", ...defaultTheme.fontFamily.sans],
    },
    // screens: {
    //   sm: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   xl: "1280px",
    //   // => @media (min-width: 1280px) { ... }

    //   "2xl": "1536px",
    //   // => @media (min-width: 1536px) { ... }
    // },
    // fontSize: {
    //   screens: {
    //     "2xl": {
    //       xs: "10px",
    //       s: "15px",
    //       sm: "17px",
    //       "2sm": "20px",
    //       m: "50px",
    //       md: "25px",
    //     },
    //     xl: {
    //       xs: "5px",
    //       s: "7px",
    //       sm: "10px",
    //       "2sm": "15px",
    //       m: "17px",
    //       md: "20px",
    //     },
    //   },
    // },
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
