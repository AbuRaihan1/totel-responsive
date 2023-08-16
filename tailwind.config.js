/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [],
  },

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      purple: "#574EFA",
      white: "#ffffff",
      "light-primary": "#E6E5FE",
      black: "#000000",
      grey: "#272d37",
      "gray-50": "#5F6D7E",
      "gray-700": "#272d37",
      greyish: "#F9F9F9",
      "light-purple": "#827cf5",
      card: "#DAE0E6",
      "green-shade": {
        100: "#F0FAF0",
        700: "#2D8A39",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      md: "16px",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [require("daisyui")],
};
