module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        teal: {
          300: "#4891b4",
          400: "#2db6a4",
          600: "#098982",
          700: "#008c57",
          900: "#054a52",
          "400_01": "#26ada6",
          "400_02": "#339688",
          "300_01": "#35ca97",
          "600_01": "#02955f",
        },
        deep_orange: { 300: "#fe9a69", 400: "#fc7948", A100: "#fea088" },
        blue_gray: {
          50: "#eaf0f1",
          100: "#cacecb",
          300: "#9db8b3",
          400: "#878686",
        },
        red: { 500: "#f8513e" },
        gray: {
          100: "#f0f4fc",
          300: "#e0e0e8",
          600: "#6c737f",
          700: "#616659",
          800: "#493f38",
          "800_01": "#383838",
          "300_02": "#e6e6e6",
          "300_01": "#e0e0e9",
        },
        light_blue: { 800: "#0167be" },
        black: { 900: "#000000", "900_01": "#0a0e15", "900_19": "#00000019" },
        orange: {
          50: "#fcf0e2",
          100: "#fce1be",
          300: "#feb352",
          A200: "#ec8e3b",
        },
        indigo: { A400: "#4461f2", A400_1c: "#4461f21c" },
        cyan: { 800: "#267a8c" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 18px  30px 0px #4461f21c",
        bs1: "0px -4px  30px 0px #00000019",
      },
      fontFamily: { sarabun: "Sarabun", inter: "Inter", kanit: "Kanit" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
