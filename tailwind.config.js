/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}", // include all source files
];
export const darkMode = 'class';
export const theme = {
    extend: {
        colors: {
            marsRed: '#b22222', // optional: custom Mars-like color
        },
    },
};
export const plugins = [];
