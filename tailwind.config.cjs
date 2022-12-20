/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        'changeThis': ['clamp(0.875rem, 0.7492rem + 0.5369vw, 1.125rem)', {}],
        'changeThis': ['clamp(1rem, 0.8742rem + 0.5369vw, 1.25rem)', {}],
        'changeThis': ['clamp(1.125rem, 0.9362rem + 0.8054vw, 1.5rem)', {}],
        'changeThis': ['clamp(1.5rem, 1.2483rem + 1.0738vw, 2rem)', {}],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
