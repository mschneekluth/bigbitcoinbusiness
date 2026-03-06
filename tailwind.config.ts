import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4A843',
          dark: '#8B7D3C',
          muted: '#A89045',
        },
      },
      letterSpacing: {
        'brand': '0.2em',
        'brand-wide': '0.35em',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        // Dark Theme
        'bbb-dark': {
          'primary': '#C9A84C',
          'primary-content': '#0A0A0A',
          'secondary': '#8B7D3C',
          'secondary-content': '#FFFFFF',
          'accent': '#D4A843',
          'accent-content': '#0A0A0A',
          'neutral': '#1A1A1A',
          'neutral-content': '#A0A0A0',
          'base-100': '#0A0A0A',
          'base-200': '#111111',
          'base-300': '#1A1A1A',
          'base-content': '#FFFFFF',
          'info': '#3B82F6',
          'success': '#22C55E',
          'warning': '#D4A843',
          'error': '#EF4444',
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.375rem',
          '--rounded-badge': '1rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.97',
          '--border-btn': '1px',
        },
        // Light Theme
        'bbb-light': {
          'primary': '#B8922E',
          'primary-content': '#FFFFFF',
          'secondary': '#8B7D3C',
          'secondary-content': '#FFFFFF',
          'accent': '#C9A84C',
          'accent-content': '#1A1A1A',
          'neutral': '#E8E0D0',
          'neutral-content': '#3D3D3D',
          'base-100': '#FAF7F2',
          'base-200': '#F0EBE0',
          'base-300': '#E8E0D0',
          'base-content': '#1A1A1A',
          'info': '#3B82F6',
          'success': '#22C55E',
          'warning': '#D4A843',
          'error': '#EF4444',
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.375rem',
          '--rounded-badge': '1rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.97',
          '--border-btn': '1px',
        },
      },
    ],
    darkTheme: 'bbb-dark',
  },
} satisfies Config
