const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      en: ['Inter var', ...defaultTheme.fontFamily.sans],
      ja: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
