module.exports = function(grunt) {

    grunt.task.registerTask('shouldWatch', 'A conditional task to determine whether the --watch flag was passed', function() {

        if (grunt.option('watch')) {
            grunt.task.run(['concurrent:watch']);
        } else {
            grunt.log.ok('--watch flag not supplied. Not watching for file changes.');
        }

    });
}; 