/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  darkMode: "selector",
  extend: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "primary-purplish": "#fa02c4",
    },
  },
};

export const plugins = [];
