/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#171717",
        light: "#f4f5f8",
        background: "#F3F3F3",
        outline: "#E9E9E9",
        gray: "#D4D4D4",
        green: "#219653",

        primary: {
          DEFAULT: "#EA4E4B",
          100: "#FFF0EF",
          200: "#F4A6A5",
          300: "#F18987",
          400: "#EA4E4B",
          500: "#9D0100",
          600: "#6A0000",
          700: "#F5D5D2",
        },

        secondary: {
          DEFAULT: "#292A29",
          100: "#EAEAEA",
          200: "#B8B8B8",
          300: "#707170",
          400: "#292A29",
          500: "#1B1C1B",
          600: "#0E0E0E",
        },

        accent: {
          DEFAULT: "#D9EBCD",
          100: "#FCFDFA",
          200: "#F2F8EE",
          300: "#E6F2DE",
          400: "#D9EBCD",
          500: "#919D89",
          600: "#484E44",
        },

        tertiary: {
          DEFAULT: "#B4A572",
          100: "#F8F6F1",
          200: "#E6E1D0",
          300: "#CDC3A1",
          400: "#B4A572",
          500: "#786E4C",
          600: "#3C3726",
        },

        warning: {
          DEFAULT: "#FB8417",
          dark: "#A7580F",
          light: "#FFF3E8",
        },

        error: {
          DEFAULT: "#EB3428",
          dark: "#9D231B",
          light: "#FDEBEA",
        },

        success: {
          DEFAULT: "#05B756",
          dark: "#037A39",
          light: "#E6F8EF",
        },

        info: {
          DEFAULT: "#2F80ED",
          dark: "#1F559E",
          light: "#EBF3FE",
        },

        dark: {
          10: "#474747",
          20: "#515251",
          30: "#8D8E8D",
          40: "#353535",
          50: "#E2E7EA",
          60: "#F8F8F8",
          70: "#505050",
          80: "#888888",
          90: "#F2F1F1",
          100: "#D9DDDF",
          200: "#CAD1D6",
          300: "#BEC4C8",
          400: "#ACADAD",
          500: "#A0A1A2",
          600: "#7A7C7C",
          700: "#666869",
          800: "#444444",
          900: "#231F1F",
        },
      },
    },
  },
  plugins: [],
};
