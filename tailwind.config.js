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
        "deep-brown": "0 0 0 2px #1e293b",
      },
    },
    colors: {
      light: "#a88376",
      "medium-brown": "#8d6a5f", // default
      "deep-brown": "#543e37",
      "light-yellow": "#ffec99",
      "opaque-white": "#ffffffc3",
    },
  },
  plugins: [],
};
