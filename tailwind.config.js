module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('assets/images/futuristic-background.png')",
        "layout-header-one": "url('assets/images/layout-header-one.png')",
      },
      images: {
        dog1: "url('assets/images/dog1.png')",
        dog2: "url('assets/images/dog2.png')",
        dog3: "url('assets/images/dog3.png')",
        dog4: "url('assets/images/dog4.png')",
      },
    },
    fontFamily: {
      festive: ["Festive", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
