module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
};
