'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "scss/style.scss",
            tasks: ["sass"]
        },
        // "less"-task configuration
        sass: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                files: {
                    // compilation.css  :  source.less
                    "css/style.css": "scss/style.scss"
                }
            },
        },
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
};
