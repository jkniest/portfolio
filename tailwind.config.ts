import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#ff34a3',
            }
        },
        fontFamily: {
            heading: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
            content: ['Montserrat', ...defaultTheme.fontFamily.sans],
        }
    }
};
