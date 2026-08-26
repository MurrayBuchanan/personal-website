/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'fade-zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'fade-zoom-in': 'fade-zoom-in 0.7s ease-out',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-lg': ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        section: ['0.9375rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        body: ['0.9375rem', { lineHeight: '1.65' }],
        meta: ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0.01em' }],
        editorial: ['1.0625rem', { lineHeight: '1.7' }],
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        customGreen: '#4cb782',
        customDark: '#08090a',
        // Linear.app colours
        accent: {
          DEFAULT: '#5e6ad2',
          light: '#5e6ad2',
          dark: '#828fff',
        },
        neutral: {
          50: '#f7f8f8',
          100: '#f4f5f8',
          200: '#e8e9eb',
          300: '#d0d6e0',
          400: '#8a8f98',
          500: '#8a8f98',
          600: '#5a5f6b',
          700: '#3e3e44',
          800: '#23252a',
          900: '#0f1011',
          950: '#08090a',
        },
        primary: {
          light: '#f4f5f8',
          DEFAULT: '#f4f5f8',
          dark: '#08090a',
        },
        secondary: {
          light: '#222326',
          DEFAULT: '#222326',
          dark: '#f7f8f8',
        },
        tertiary: {
          light: '#8a8f98',
          DEFAULT: '#8a8f98',
          dark: '#8a8f98',
        },
        orange: {
          light: '#f2994a',
          DEFAULT: '#f2994a',
          dark: '#f2994a',
        },
        yellow: {
          light: '#f2c94c',
          DEFAULT: '#f2c94c',
          dark: '#f2c94c',
        },
        green: {
          light: '#4cb782',
          DEFAULT: '#4cb782',
          dark: '#4cb782',
        },
        mint: {
          light: '#26b5ce',
          DEFAULT: '#26b5ce',
          dark: '#26b5ce',
        },
        blue: {
          light: '#5e6ad2',
          DEFAULT: '#5e6ad2',
          dark: '#828fff',
        },
        indigo: {
          light: '#5e6ad2',
          DEFAULT: '#5e6ad2',
          dark: '#828fff',
        },
        purple: {
          light: '#bb87fc',
          DEFAULT: '#bb87fc',
          dark: '#bb87fc',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};