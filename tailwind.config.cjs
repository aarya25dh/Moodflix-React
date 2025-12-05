module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0f0f1a',
          surface: '#16161f',
          accent: '#3f646b',
          accentBright: '#5aa1a6',
          pink: '#6b3f57',
          pinkBright: '#9a5f77',
          purple: '#4f3b63',
          purpleBright: '#765b88',
          blue: '#2f4a5e',
          blueBright: '#5b7fa0',
          green: '#3b5b3f',
          greenBright: '#6aa07a',
          text: '#e5e5e5',
          muted: '#bfbfbf',
          light: '#0b0b10',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#3f646b',
          secondary: '#6b3f57',
          accent: '#4f3b63',
          neutral: '#16161f',
          'base-100': '#0f0f1a',
          'base-content': '#e5e5e5',
        },
      },
    ],
    styled: true,
  },
}
