module.exports = {
    darkMode: 'class', // or 'media' or 'class'
    plugins: [
        // https://github.com/jamiebuilds/tailwindcss-animate
        require("tailwindcss-animate"),
    ],
    theme: {
        boxShadow: {
            /* Customized */
            DEFAULT: '0 6px 8px rgba(102, 119, 136, 0.03), 0 1px 2px rgba(102, 119, 136, 0.3)',
            md: '0 4px 6px -1px rgba(102, 119, 136, 0.05), 0 2px 4px -1px rgba(102, 119, 136, 0.35)',

            /* Default */
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        }
    },
    content: {
        files: ['**/*.{ejs,md}', '**/widget/*.html', '**/js/main.js'],
    }
};