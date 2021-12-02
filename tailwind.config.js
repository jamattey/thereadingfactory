module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      yellow: {
        lighter: "#FDE68A",
        light: "#FCD34D",
        DEFAULT: "#fab005",
        dark: "#f08c00",
        darker: "#f08c00",
        darkest: "#B45309",
        trans: "rgba(180, 83, 9, 0.459)",
      },
      white: {
        DEFAULT: "#f1f1f1",
        light: "#ffffff",
        dark: "#868e96",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
