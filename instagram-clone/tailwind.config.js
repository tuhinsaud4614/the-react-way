const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ...defaultTheme.fontFamily.sans,
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        silver: "#8e8e8e",
        "sliver-100": "#efefef",
        "sliver-200": "#dbdbdb",
        "sliver-300": "#a8a8a8",
        accent: "#0095f6",
        fb: "#385185",
        "my-blue-100": "#00376b",
      },
      spacing: {
        2.5: "0.625rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
      },
    },
  },
  plugins: [],
};
