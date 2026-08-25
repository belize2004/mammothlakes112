/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0c0e10',
          900: '#121417',
          850: '#181b20',
          800: '#1f2329',
          700: '#2c313a',
          600: '#3e4551',
        },
        alabaster: {
          50: '#faf9f6',
          100: '#f7f5f0',
          200: '#efece4',
          300: '#e2ded3',
          400: '#cac4b5',
          500: '#aba290',
        },
        slate: {
          border: 'rgba(255, 255, 255, 0.1)',
          'border-light': 'rgba(18, 20, 23, 0.12)',
          muted: '#8b949e',
        },
        pine: {
          900: '#131e17',
          800: '#1c2c22',
          700: '#273c2f',
          600: '#385442',
        },
        hearth: {
          DEFAULT: '#c49b66',
          light: '#d6b384',
          dark: '#a37946',
        },
        alpenglow: {
          DEFAULT: '#d95a2b',
          hover: '#e26b3f',
          dark: '#b84419',
          subtle: 'rgba(217, 90, 43, 0.15)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      boxShadow: {
        'alpine': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'alpine-subtle': '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'alpine': '2px',
      },
    },
  },
  plugins: [],
};
