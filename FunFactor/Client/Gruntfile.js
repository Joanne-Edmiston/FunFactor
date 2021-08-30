
(function (module) {


    var getCleanConfig = function () {

        return {
            tmp: {
                files: {
                    src: ['Build/Temp', 'wwwroot/Fonts']
                }
            }
        };

    };

    var getSassConfig = function () {

        return {
            options: {
                loadPath: ['node_modules/bootstrap/scss', 'Build/Temp/scss', 'Build/Sass']
            },
            dev: {
                options: { style: 'expanded' },
                files: [
                    { dest: 'Build/Temp/Styles/app.css', src: 'Build/Sass/app.scss' },
                ]
            },

        };

    };

    var getConcatConfig = function () {

        return {
            options: {
                separator: ';'
            },
            dev: {
                files: {
                    'Build/Temp/Styles/app.css': ['Build/Temp/Styles/app.css' /*, add more here if needed*/]
                }
            },

        };

    };

    var getAutoprefixerConfig = function () {

        return {
            dev: {
                options: {
                    diff: true
                },
                src: 'Build/Temp/Styles/**/*.css'
            },
            live: {
                src: 'Build/Temp/Styles/**/*.css'
            }
        };

    };

    var getWatchConfig = function () {
        return {
            scripts: {
                files: 'Build/**/*.*',
                tasks: ['Build'],
                options: {
                    spawn: false,
                    event: ['all']
                },
            },
        };
    };

    var getCopyConfig = function () {

        var config = {};

        config.fontawesome = {
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: 'node_modules/@fortawesome/fontawesome-free/scss/*.scss',
                    dest: 'Build/Temp/scss/font-awesome'
                }
            ]
        };
        config.dev = {
            files: [
                //site css               
                { expand: true, flatten: true, dest: 'wwwroot/css/', src: 'Build/Temp/Styles/app.css' },

                //bootstrap js
                { expand: true, flatten: true, src: 'node_modules/bootstrap/dist/js/bootstrap.js', dest: 'wwwroot/lib/', },

                //font-awesome fonts
                { expand: true, flatten: true, src: 'node_modules/@fortawesome/fontawesome-free/webfonts/*', dest: 'wwwroot/Fonts/', },


            ],
        };

        return config;
    };

    module.exports = function (grunt) {

        // GRUNT - The task runner
        var gruntConfig = {
            clean: getCleanConfig(),
            sass: getSassConfig(),
            concat: getConcatConfig(),
            autoprefixer: getAutoprefixerConfig(),
            copy: getCopyConfig(),
            watch: getWatchConfig(),
        };

        grunt.initConfig(gruntConfig);

        // Load required grunt tasks
        grunt.loadNpmTasks('grunt-contrib-clean'); // Cleans the temporary folder before each build
        grunt.loadNpmTasks('grunt-contrib-sass');  // SASS Pre-processor
        grunt.loadNpmTasks('grunt-contrib-concat'); // File joiner
        grunt.loadNpmTasks('grunt-autoprefixer'); // Browser prefixer
        grunt.loadNpmTasks('grunt-contrib-copy'); // Copy
        grunt.loadNpmTasks('grunt-contrib-watch'); // Copy

        // Register tasks
        grunt.registerTask('Build', ['clean', 'copy:fontawesome', 'sass:dev', 'concat:dev', 'autoprefixer:dev', 'copy:dev']);


    }

})(module);