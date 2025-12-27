/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: '#f5f5f5',
                ink: '#121212',
            },
            fontFamily: {
                display: ['"Libre Caslon Condensed"', 'serif'],
                body: ['"Poppins"', 'sans-serif'],
            },
            fontSize: {
                'giant': ['6rem', { lineHeight: '0.85' }],
            }
        }
    },
    plugins: [],
}
