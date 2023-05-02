/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './page_impls/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '8dp': [
          '0 4px 8px rgba(0, 0, 0, 0.08)',
          '0 4px 32px rgba(0, 0, 0, 0.08)',
        ],
        '16dp': [
          '0 8px 12px rgba(0, 0, 0, 0.08)',
          '0 4px 48px rgba(0, 0, 0, 0.08)',
        ],
        '24dp': [
          '0 8px 12px rgba(0, 0, 0, 0.08)',
          '0 4px 48px rgba(0, 0, 0, 0.08)',
        ],
      },
      colors: {
        'offBlack': '#050406',
        // Grays
        'gray-1': '#0f0d15',
        'gray-2': '#1d1929',
        'gray-3': '#34303e',
        'gray-4': '#4a4754',
        'gray-5': '#615e69',
        'gray-6': '#77757f',
        'gray-7': '#8e8c94',
        'gray-8': '#a5a3a9',
        'gray-9': '#bbbabf',
        'gray-10': '#d2d1d4',
        'gray-11': '#e8e8ea',
        'gray-12': '#f9f9f9',
        // Blues
        'blue-1': '#0030cc',
        'blue-2': '#0036e6',
        'blue-3': '#003cff',
        'blue-4': '#1a50ff',
        'blue-5': '#3363ff',
        'blue-6': '#4d77ff',
        'blue-7': '#668aff',
        'blue-8': '#809eff',
        'blue-9': '#99b1ff',
        'blue-10': '#b3c5ff',
        'blue-11': '#ccd8ff',
        'blue-12': '#e6ecff',
        // Pinks
        'pink-1': '#c80068',
        'pink-2': '#e10075',
        'pink-3': '#fa0082',
        'pink-4': '#fb1a8f',
        'pink-5': '#fb339b',
        'pink-6': '#fc4da8',
        'pink-7': '#fc66b4',
        'pink-8': '#fd80c1',
        'pink-9': '#fd99cd',
        'pink-10': '#feb3da',
        'pink-11': '#fecce6',
        'pink-12': '#ffe6f3',
        // Greens
        'green-1': '#18ba92',
        'green-2': '#1bd2a4',
        'green-3': '#1ee9b6',
        'green-4': '#35ebbd',
        'green-5': '#4bedc5',
        'green-6': '#62f0cc',
        'green-7': '#78f2d3',
        'green-8': '#8ff4db',
        'green-9': '#a5f6e2',
        'green-10': '#bcf8e9',
        'green-11': '#d2fbf0',
        'green-12': '#e9fdf8',
        // Yellows
        'yellow-1': '#ccb243',
        'yellow-2': '#e6c84c',
        'yellow-3': '#ffde54',
        'yellow-4': '#ffe165',
        'yellow-5': '#ffe576',
        'yellow-6': '#ffe887',
        'yellow-7': '#ffeb98',
        'yellow-8': '#ffefaa',
        'yellow-9': '#fff2bb',
        'yellow-10': '#fff5cc',
        'yellow-11': '#fff8dd',
        'yellow-12': '#fffcee',
        // Oranges
        'orange-1': '#cc5801',
        'orange-2': '#e66301',
        'orange-3': '#ff6e01',
        'orange-4': '#ff7d1a',
        'orange-5': '#ff8b34',
        'orange-6': '#ff9a4d',
        'orange-7': '#ffa867',
        'orange-8': '#ffb780',
        'orange-9': '#ffc599',
        'orange-10': '#ffd4b3',
        'orange-11': '#ffe2cc',
        'orange-12': '#fff1e6',
        // Reds
        'red-1': '#c32021',
        'red-2': '#dc2425',
        'red-3': '#f42829',
        'red-4': '#f53e3e',
        'red-5': '#f65354',
        'red-6': '#f76969',
        'red-7': '#f87e7f',
        'red-8': '#fa9494',
        'red-9': '#fba9a9',
        'red-10': '#fcbfbf',
        'red-11': '#fdd4d4',
        'red-12': '#feeaea',
        // Purples
        'purple-1': '#ae59c6',
        'purple-2': '#c364df',
        'purple-3': '#d96ff8',
        'purple-4': '#dd7df9',
        'purple-5': '#e18cf9',
        'purple-6': '#e49afa',
        'purple-7': '#e8a9fb',
        'purple-8': '#ecb7fc',
        'purple-9': '#f0c5fc',
        'purple-10': '#f4d4fd',
        'purple-11': '#f7e2fe',
        'purple-12': '#fbf1fe',
      }
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}