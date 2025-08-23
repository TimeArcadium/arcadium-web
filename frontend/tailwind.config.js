module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        purpleBlack: "#06000F",
        plasmaMagenta: "#FF00FB",
        nebulaPurple: "#3A007B",
        stellarWhite: "#FFFFFF",
        massiveBlack: "#000000",
        errorRed: "#FF0000",
        correctGreen: "#09B200",
      },
      fontSize: {
        display: '2.25rem', // 36px
        lg: '1.25rem',      // 20px
        base: '1rem',       // 16px
        sm: '0.8125rem',    // 13px
        xs: '0.75rem',      // 12px
        tiny: '0.625rem',   // 10px
      }
    },
  },
};
