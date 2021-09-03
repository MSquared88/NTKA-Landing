module.exports = {
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '6rem',
      '8xl': '7rem'
    },
    fontFamily: {
      logo: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        },
        primeBlue: {
          light: '#f2f9ff',
          dark: '#015cab'
        },
        primeRed: '#C5011F',
        tint: 'rgb(0,0,0,.85)',
        brightYellow: '#ffff00'
      }
    }
  },
  variants: {},
  plugins: []
};
