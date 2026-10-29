/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Direct Installations brand, set against a product-gallery neutral palette.
        brand: {
          red: '#D81E27',
          'red-dark': '#B2161D',
          'red-light': '#E8464E',
          black: '#1D1D1F',
          ink: '#1D1D1F',
        },
        slate: {
          muted: '#6E6E73',
        },
        paper: '#F5F5F7',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', 'Arial', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'Inter', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
