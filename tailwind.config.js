/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: {
                    50: '#f0f7f0',
                    100: '#dceddc',
                    200: '#bbdabb',
                    300: '#8fbf8f',
                    400: '#5f9e5f',
                    500: '#3d7d3d',
                    600: '#2d6030',
                    700: '#254d28',
                    800: '#1e3d22',
                    900: '#19331d',
                    950: '#0d1f10',
                },
                gold: {
                    300: '#f5d98b',
                    400: '#e8c060',
                    500: '#c8952a',
                    600: '#a87820',
                },
                cream: '#f5f0e8',
            },
            fontFamily: {
                display: ['Playfair Display', 'Georgia', 'serif'],
                body: ['Lato', 'sans-serif'],
                mono: ['DM Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
