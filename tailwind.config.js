/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // Enable dark mode via 'dark' class
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
      colors: {
        customGreen: '#32a852', // Add custom colors
        customDark: '#0d0d0d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add custom fonts
      },
      spacing: {
        '128': '32rem', // Add custom spacing
      },
      colors: {
        primary: {
          light: '#ffffff',          // White for light mode
          DEFAULT: '#ffffff',        // White for default
          dark: '#1D1D1F',           // Black for dark mode
        },
        secondary: {
          light: '#fafafa',          // Off-white light
          DEFAULT: '#fafafa',        // Off-white
          dark: '#000000',           // Darker gray
        },
        tertiary: {
          light: '#949499',          // Light gray
          DEFAULT: '#949499',        // Neutral gray
          dark: '#5E5E63',           // Darker gray
        },
        quaternary: {
          light: '#616164',          // Lighter gray
          DEFAULT: '#616164',        // Default lighter gray
          dark: '#fafafa',           // Neutral gray
        },
        red: {
          light: '#FF3B30',          // Light red
          DEFAULT: '#FF3B30',        // Default red
          dark: '#FF453A',           // Darker red
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
    require('@tailwindcss/typography'), // Example plugin
  ],
};