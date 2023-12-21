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
      md: '758px',
      lg: '980px',
    },
    extend: {
      boxShadow: {
        'deep-blue': '0 0 0 2px #1e293b',
      },
    },
    colors: {
      'light-blue': '#549dcf',
      'medium-blue': '#5e7692', // default
      'deep-blue': '#1e293b',
      'light-gray': '#D3D3D37F',
      'deep-gray': '#1e293bd1',
      'opaque-white': '#ffffffc3',
    },
  },
  plugins: [],
};
