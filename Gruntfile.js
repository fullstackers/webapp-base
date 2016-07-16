module.exports = function(grunt) {
    "use strict";

    var serverPort = process.env.PORT || 3000;

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        
        browserSync: {
            options: {
                injectChanges: true,
                watchTask: true,
                reloadDebounce: 3000,
                proxy: 'localhost' + serverPort
            },
            dev: {
                bsFiles: {
                    src: [
                        'generated/css/app.css',
                        'generated/index.html'
                    ]
                },
            }
        },

        // Remove dynamically generated directories
        clean: {
            generated: ['generated'],
            dist: ['dist']
        },

        // Concatenate JavaScript files together into a single file
        concat: {
            options: {
                separator: ';'
            },
            client: {
                src: [
                    'app/**/*.module.js',
                    'app/**/*.config.js',
                    'app/**/*.run.js',
                    'app/**/*.js',
                    '!app/**/*.spec.js'
                ],
                dest: 'generated/js/client.js'
            },
            generated: {
                options: {
                    separator: ';'
                },
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/ui-router/release/angular-ui-router.js',
                    'generated/js/client.js',
                    'generated/js/angular-templates.js'
                ],
                dest: 'generated/js/app.js'
            }
        },
        exec: {
            yo: {
                cmd: function(generator, name) {
                  return "node node_modules/yo/lib/cli.js webapp:"+generator+" "+name;
		}
                
            }
        },


        // Copy static files to the generated directory
        copy: {
            generated: {

                // Copy HTML files from the pages directory to the root of the generated directory
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'app/pages/**/*.html',
                    dest: 'generated/',
                    filter: 'isFile'
                },
                // Copy image files from the img/ directory to the img/ directory of generated/
                {
                    expand: true,
                    flatten: true,
                    src: ['app/img/**/*'],
                    dest: 'generated/img/'
                }, 
                // Copy bootstrap fonts to the generated directory 
                {
                    expand: true,
                    flatten: true,
                    src: ['bower_components/bootstrap/fonts/**/*'],
                    dest: 'generated/fonts'  
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'generated/*.html',
                    dest: 'dist/'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['app/img/**/*'],
                    dest: 'dist/img'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['generated/fonts/**/*'],
                    dest: 'dist/fonts'  
                }]
            }
        },

        // Minify CSS files for production
        cssmin: {
            dist: {
                files: {
                    'dist/css/app.css': ['generated/css/app.css']
                }
            }
        },

        express: {
            dev: {
                options: {
                    port: serverPort,
                    script: 'index.js'
                }
            }
        },

        // Code Quality
        eslint: {
            all: ['app/**/*.js']
        },

        // Convert Angular Templates to JavaScript
        html2js: {
            options: {
                htmlmin: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            },
            generated: {
                src: ['app/**/*.html', '!app/pages/*.html'],
                dest: 'generated/js/angular-templates.js'
            }
        },

        // Validate our JavaScript code with JSHint
        jshint: {
            all: ['app/**/*.js']
        },

        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'bower_components/angular/angular.js',
                        'bower_components/ui-router/release/angular-ui-router.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'app/**/*.module.js',
                        'app/**/*.config.js',
                        'app/**/*.run.js',
                        'app/**/*.js',
                        'app/**/*.html'
                    ],
                    coverageReporter: {
                        reporters: [{
                            type: 'text'
                        }]
                    },
                    reporters: ['progress', 'coverage'],
                    preprocessors: {
                        'app/**/*.html': 'ng-html2js',
                        'app/**/!(*spec).js': 'coverage'
                    },
                    ngHtml2JsPreprocessor: {
                        moduleName: 'templates-generated',
                        prependPrefix: '../app/',
                        stripPrefix: 'app/'
                    }
                }
            }
        },

        // Generate CSS from LESS files
        less: {
            generated: {
                files: {
                    'generated/css/app.css': ['app/less/app.less', 'app/**/*.less']
                }
            }
        },

        // Create directories for the generated and distribution build
        mkdir: {
            generated: {
                options: {
                    create: ['generated', 'generated/js', 'generated/css', 'generated/img', 'generated/fonts']
                }
            },
            dist: {
                options: {
                    create: ['dist', 'dist/js', 'dist/css', 'dist/img', 'dist/fonts']
                }
            }
        },

        ngAnnotate: {
            options: {
                remove: true,
            },
            generated: {
                files: {
                    'generated/js/client.js': ['generated/js/client.js']
                }
            }
        },

        ngdocs: {
            options: {
                dest: 'docs',
                startPage: '/api/app.controller:DashboardController'
            },
            all: ['app/**/*.js']
        },

        // Display OS specific errors on the developers PC when a grunt build fails
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: "Web Application", // defaults to the name in package.json, or will use project directory's name
                success: false, // whether successful grunt executions should be notified automatically
                duration: 5 // the duration of notification in seconds, for `notify-send only
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/app.js': 'generated/js/app.js'
                }
            }
        },

        // Monitor development files and rebuild those files as needed for rapid feedback
        // during development.
        watch: {
            css: {
                files: ['app/**/*.less'],
                tasks: ['less:generated']
            },
            dev: {
                files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.json', '!app/**/*.spec.js'],
                tasks: ['build']
            },
            test: {
                files: ['app/**/*.spec.js'],
                tasks: ['test']
            },
            grunt: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['core-build', 'express', 'browserSync', 'watch']);
    grunt.registerTask('core-build', ['mkdir:generated', 'html2js:generated', 'concat:client', 'ngAnnotate:generated', 'concat:generated', 'less:generated', 'copy:generated']);
    grunt.registerTask('build', ['eslint', 'jshint', 'core-build', 'karma']);
    grunt.registerTask('dist', ['build', 'mkdir:dist', 'copy:dist', 'uglify:dist', 'cssmin:dist']);
    grunt.registerTask('deploy', ['dist']);
    grunt.registerTask('test', ['eslint', 'jshint', 'karma']);

    grunt.task.registerTask('yo', 'Yeoman task', function(generator, name) {
        grunt.task.run("exec:"+this.name+":"+generator+":"+name);
    });
    // When a grunt build fails, display OS specific notifications on the screen
    grunt.task.run('notify_hooks');
};
