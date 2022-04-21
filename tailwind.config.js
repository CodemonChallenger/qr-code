module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "sans": "Outfit, sans-serif",
    },
    fontSize: {
      "xs": ["11px", "18px"],
      "sm": ["13px", "20px"],
      "base": ["15px", "24px"],
      "lg": ["17px", "28px"],
      "xl": ["19px", "30px"],
      "2xl": ["22px", "36px"],
      "3xl": ["28px", "45px"],
      "4xl": ["33px", "54px"],
      "5xl": ["45px", "72px"],
      "6xl": ["60px", "96px"],
      "7xl": ["75px", "120px"],
    },
    extend: {
      colors: {
        "lightGray": "#d6e2f0",
        "grayishBlue": "#7b879d",
        "darkBlue": "#1f3251",
      },
    },
  },
  plugins: [],
};
