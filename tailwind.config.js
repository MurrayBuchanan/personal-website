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
        customGreen: '#32a852',
        customDark: '#0d0d0d',
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#ebebeb',
          300: '#d6d6d6',
          400: '#b1b1b1',
          500: '#8a8a8a',
          600: '#6b6b6b',
          700: '#4a4a4a',
          800: '#2a2a2a',
          900: '#1a1a1a',
          950: '#141414',
        },
        primary: {
          light: '#f5f5f5',
          DEFAULT: '#f5f5f5',
          dark: '#141414',
        },
        secondary: {
          light: '#000000',
          DEFAULT: '#000000',
          dark: '#f5f5f5',
        },
        tertiary: {
          light: '#b1b1b1',
          DEFAULT: '#b1b1b1',
          dark: '#b1b1b1',
        },
        orange: {
          light: '#FF9F00',          // Light orange
          DEFAULT: '#FF9500',        // Default orange
          dark: '#FF9F00',           // Darker orange
        },
        yellow: {
          light: '#FFD60A',          // Light yellow
          DEFAULT: '#FFCC00',        // Default yellow
          dark: '#FFD60A',           // Darker yellow
        },
        green: {
          light: '#30D158',          // Light green
          DEFAULT: '#28CD41',        // Default green
          dark: '#32D74B',           // Darker green
        },
        mint: {
          light: '#66D4CF',          // Light mint
          DEFAULT: '#00C7BE',        // Default mint
          dark: '#32D74B',           // Darker mint
        },
        blue: {
          light: '#0A84FF',          // Light blue
          DEFAULT: '#007AFF',        // Default blue
          dark: '#0A84FF',           // Darker blue
        },
        indigo: {
          light: '#5E5CE6',          // Light indigo
          DEFAULT: '#5856D6',        // Default indigo
          dark: '#5E5CE6',           // Darker indigo
        },
        purple: {
          light: '#BF5AF2',          // Light purple
          DEFAULT: '#AF52DE',        // Default purple
          dark: '#BF5AF2',           // Darker purple
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};