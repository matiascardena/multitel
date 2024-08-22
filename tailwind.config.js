/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
     'xs': '480px',  
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px', // Opcional, para pantallas extra grandes
      'landscapes': { 'raw': `only screen and (max-height: 450px) and (orientation: landscape)`//Cambiar x alto
 },
      'portrait': { 'raw': '(orientation: portrait)' },
    },
  },
  plugins: [],
};
