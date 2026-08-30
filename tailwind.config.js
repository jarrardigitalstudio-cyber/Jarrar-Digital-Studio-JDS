/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#9C7A22',
          primary: '#9C7A22',
          dark: '#7C5F16',
          accent: '#B8912F',
        },
        verrena: {
          text: '#1A1710',
          muted: '#7A7264',
          bg: '#FBF8F2',
          bgSoft: '#F3EEE2',
          card: '#FFFFFF',
          border: 'rgba(26, 23, 16, 0.10)',
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
        pill: '999px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(26, 23, 16, 0.06)',
        medium: '0 12px 32px rgba(26, 23, 16, 0.10)',
        gold: '0 24px 60px rgba(156, 122, 34, 0.16)',
        goldHover: '0 28px 64px rgba(156, 122, 34, 0.28)',
        goldSubtle: '0 18px 40px rgba(156, 122, 34, 0.30)',
        phone: '0 40px 80px rgba(26, 23, 16, 0.22)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9C7A22, #B8912F)',
      },
      transitionTimingFunction: {
        verrena: 'cubic-bezier(.22, 1, .36, 1)',
        verrenaBounce: 'cubic-bezier(.34, 1.56, .64, 1)',
        verrenaRise: 'cubic-bezier(.16, 1, .3, 1)',
      },
      keyframes: {
        heroRise: {
          'from': { opacity: '0', transform: 'translateY(28px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        waPulse: {
          '0%, 100%': {
            boxShadow: '0 24px 60px rgba(156, 122, 34, 0.16), 0 0 0 0 rgba(156, 122, 34, 0.35)',
          },
          '50%': {
            boxShadow: '0 24px 60px rgba(156, 122, 34, 0.16), 0 0 0 10px rgba(156, 122, 34, 0)',
          },
        },
      },
      animation: {
        heroRise: 'heroRise 0.9s cubic-bezier(.16, 1, .3, 1) both',
        heroRiseDelay: 'heroRise 0.9s cubic-bezier(.16, 1, .3, 1) 0.15s both',
        waPulse: 'waPulse 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
