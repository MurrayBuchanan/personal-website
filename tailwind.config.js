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
        sans: ['GeneralSans-Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['GeneralSans-Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['GeneralSans-Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
        customDark: '#0a0a0a',
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#9a9a9a',
          500: '#6b6b6b',
          600: '#6b6b6b',
          700: '#3f3f3f',
          800: '#1a1a1a',
          900: '#0a0a0a',
          950: '#0a0a0a',
        },
        primary: {
          light: '#fafaf9',
          DEFAULT: '#fafaf9',
          dark: '#0a0a0a',
        },
        secondary: {
          light: '#1a1a1a',
          DEFAULT: '#1a1a1a',
          dark: '#ededed',
        },
        tertiary: {
          light: '#6b6b6b',
          DEFAULT: '#6b6b6b',
          dark: '#a0a0a0',
        },
        muted: {
          light: '#9a9a9a',
          DEFAULT: '#9a9a9a',
          dark: '#6b6b6b',
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