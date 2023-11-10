/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '335px',
      // => @media (min-width: 640px) { ... }

      md: '758px',
      // => @media (min-width: 768px) { ... }

      lg: '980px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
