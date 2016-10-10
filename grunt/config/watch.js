module.exports = {
    options: {
        interrupt: true
    },
    jsMain: {
        files: 'js/lib/**/*.js',
        tasks: 'buildJsMain'
    },
    jsDeps: {
        files: 'js/deps/**/*.js',
        tasks: 'buildJsDeps'
    },
    css: {
        files: 'scss/**/*.scss',
        tasks: 'buildCss'
    },
    images: {
        files: 'img/**',
        tasks: 'reloadImages'
    }
};