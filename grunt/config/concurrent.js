module.exports = {
    watch: {
        options: {
            logConcurrentOutput: true,
            limit: 3
        },
        tasks: ['watch:jsMain', 'watch:jsDeps', 'watch:css']
    }
};