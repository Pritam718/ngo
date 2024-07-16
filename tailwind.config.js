// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        '3d': '0 0 5px rgba(0, 0, 0, .05), 0 -1px 3px rgba(0, 0, 0, .2), 0 3px 5px rgba(0, 0, 0, .2), 0 3px 6px rgba(0, 0, 0, .3), 0 9px 9px rgba(0, 0, 0, .3), 0 15px 15px rgba(0, 0, 0, .3)',
      },
      colors: {
        customColor: '#C30047',
        footerColor: '#400A28'
        
      },
    },
    fontFamily: {
      'kanit': ['Kanit', 'sans-serif']
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-3d': {
          textShadow: '0 0 5px rgba(0, 0, 0, .05), 0 -1px 3px rgba(0, 0, 0, .2), 0 3px 5px rgba(0, 0, 0, .2), 0 3px 6px rgba(0, 0, 0, .3), 0 9px 9px rgba(0, 0, 0, .3), 0 15px 15px rgba(0, 0, 0, .3)'
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

