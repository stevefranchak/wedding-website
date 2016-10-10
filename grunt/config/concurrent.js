module.exports = {
    watch: {
        options: {
            logConcurrentOutput: true,
            limit: 5
        },
        tasks: ['watch:jsMain', 'watch:jsDeps', 'watch:css', 'watch:images', 'watch:html']
    }
};