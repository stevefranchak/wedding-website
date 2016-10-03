module.exports = function(grunt) {

    grunt.task.registerTask('shouldUglifyJsMain', 'A conditional task to determine whether jsMain should be uglified based on the --prod flag', function() {

        if (grunt.option('prod')) {
            grunt.task.run(['uglify:main']);
        } else {
            grunt.task.run(['copy:jsMain']);
        }

    });
}; 