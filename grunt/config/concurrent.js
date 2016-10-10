module.exports = {
    watch: {
        options: {
            logConcurrentOutput: true,
            limit: 4
        },
        tasks: ['watch:jsMain', 'watch:jsDeps', 'watch:css', 'watch:images']
    }
};