/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "335px",
      md: "758px",
      lg: "980px",
    },
    extend: {
      boxShadow: {
        "deep-blue": "0 0 0 2px #1e293b",
      },
    },
    colors: {
      "light-blue": "#a88376",
      "medium-blue": "#8d6a5f", // default
      "deep-blue": "#72554b",
      "light-gray": "#ffec99",
      "deep-gray": "#4b332a",
      "opaque-white": "#ffffffc3",
    },
  },
  plugins: [],
};
