/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {},
        fontFamily: {
            overpass: "'Overpass', 'sans-serif'",
        },

        fontSize: {
            sm: ['14px', '22px'],
            base: ['15px', '24px'],
            base2: ['16px', '24px'],
            lg: ['24px', '30px'],
            xl: ['28px', '35x'],
        },
        fontWeight: {
            normal: '400',
            bold: '700',
        },
        borderRadius: {
            none: '0',
            sm: '15px',
            lg: '30px',
            full: '9999px',
        },
        future: {
            hoverOnlyWhenSupported: true,
        },
        extend: {},
    },
    plugins: [],
};
