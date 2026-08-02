/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        muted: '#6B7280',
        border: '#E5E7EB',
        surface: '#FAFAFA',
        forest: '#2F5D50'
      },
      borderRadius: { card: '16px' },
      boxShadow: { soft: '0 8px 24px rgba(0,0,0,.05)' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
};
