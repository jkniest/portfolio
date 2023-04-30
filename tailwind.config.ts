import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff34a3'
      },
      borderRadius: {
        drawn: '255px 15px 225px 15px/15px 225px 15px 255px'
      }
    },
    fontFamily: {
      heading: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
      content: ['Montserrat', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'view-transition': (value: string) => {
          return {
            'view-transition-name': value
          };
        }
      });
    })
  ]
};
