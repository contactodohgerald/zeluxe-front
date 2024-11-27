/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1E7E34',
        secondary: '#282828',
        'grey-5': '#6C757D',
        'grey-6': '#343A40',
        'green-5': '#008000',
        'black-6': '#212529',
        link: '#28A745',
        muted: '#6c757d',
        success: '#28a745',
        danger: '#FD5F4A',
        'danger-5': '#FF0000',
        light: '#F5F4F8',
        warning: '#FFE500',
      },
      backgroundImage: {
        'green-gradient':
          'radial-gradient(50% 50% at 50% 50%, #F0F9F4 0%, #FFFFFF 100%);',
      },
      fontSize: {},
      spacing: {},
      maxWidth: {},
      boxShadow: {
        dark: '0px 4px 4px 0px #000000A6',
        light: '0px 3.36px 3.36px 0px #0000001A',
        card: '0px 5.53px 11.05px 0px #00000040',
        profile: '0px 1px 4px 0px #00000033',
        filter: '0.49px 1.48px 2.46px 0px #00000026',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
