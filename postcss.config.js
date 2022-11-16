module.exports = {
    plugins: {
        'postcss-import': {path: 'themes/coo/source/css'},
        'tailwindcss': {config: './tailwind.config.js'},
        'autoprefixer': {},
        'postcss-minify':{},
    }
};