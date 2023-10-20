import defaultTheme from 'tailwindcss/defaultTheme';
const { nextui } = require("@nextui-org/react");
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                dimPrimary: "#00040f",
                dimPerseo: "var(--dimPerseo)",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                dimDark: "#00040f",
                dimBlue: "rgba(9, 151, 124, 0.1)",
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },

    plugins: [nextui()],
};
