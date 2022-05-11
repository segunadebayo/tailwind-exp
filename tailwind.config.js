const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    colors: {
      accents: {
        1: "#fafafa",
        2: "#eaeaea",
        3: "#999999",
        4: "#888888",
        5: "#666666",
        6: "#444444",
        7: "#333333",
        8: "#111111",
      },
    },
    spacing: {
      "1x": "4px",
      "2x": "8px",
      "4x": "16px",
      "8x": "32px",
      "16x": "64px",
      "32x": "128px",
      "48x": "192px",
      "64x": "256px",
      "128x": "512px",

      small: "32px",
      medium: "40px",
      large: "48px",

      gap: "24px",
      halfGap: "12px",
      quarterGap: "6px",
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".Text": {
          color: theme("colors.accent.3"),
          fontSize: "var(--fs-default)",

          "@media (max-width: 960px)": {
            fontSize: "var(--fs-tablet)",
          },
          "@media (max-width: 600px)": {
            fontSize: "var(--fs-mobile)",
          },

          "&.variant--h1": {
            "--fs-default": "4.5rem",
            "--fs-tablet": "4rem",
            "--fs-mobile": "2rem",
            lineHeight: "1.01em",
            fontWeight: 800,
            letterSpacing: "-0.049375rem",
          },

          "&.variant--h2": {
            "--fs-default": "3.5rem",
            "--fs-tablet": "3rem",
            "--fs-mobile": "2rem",
            lineHeight: "1.1em",
            fontWeight: 700,
            letterSpacing: "-0.049375rem",
          },
        },
      });
    }),
  ],
};
