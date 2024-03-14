/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    
    extend: {
      colors: {
        primaryBlue: "#1054F1",
        textPrimary: "#292E3D",
        textSecondary: "#525D81",
        btnBg: "#292E3D",
        bgBlue: "#F3F7FA",
      },
      fontFamily:{
        'Inter': ['Inter', "sans-serif"],
        'Syne': ['Syne', "sans-serif"],
      },
    },
  },
  plugins: [],
};
