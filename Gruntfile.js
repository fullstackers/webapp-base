module.exports = function (grunt) {
	"use strict";

	var serverPort = process.env.PORT || 3000;

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-clean');
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
	grunt.loadNpmTasks('grunt-bower-concat');

  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-wiredep');

	grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ['> 1% in US']
      },
      generated: {
        src: 'generated/css/app.css'
      }
    },
		browserSync: {
			options: {
				injectChanges: true,
				watchTask: true,
				reloadDebounce: 3000,
				proxy: 'localhost:' + serverPort
			},
			dev: {
				bsFiles: {
					src: ['generated/index.html', 'generated/css/app.css']
				},
			}
		},

		// Remove dynamically generated directories
		clean: {
			generated: ['generated'],
			dist: ['dist']
		},

		// Concatenate JavaScript files together into a single file
    
		exec: {
			yo: {
				cmd: function (generator, name) {
					return "node node_modules/yo/lib/cli.js webapp:" + generator + " " + name;
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
        },
        // Font-Awesome Font
        {
          expand: true,
          flatten: true,
          src: ['bower_components/font-awesome/fonts/**/*'],
          dest: 'generated/fonts'
        }, {
          expand: true,
          src: ['app/**/*.js', '!app/**/*.spec.js'],
          dest: 'generated/'
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
					'dist/css/app.css': ['generated/css/app.css']//,
					//'dist/css/bower.css': ['generated/css/bower.css']
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
					frameworks: ['wiredep', 'jasmine'],
					singleRun: true,
					browsers: ['PhantomJS'],
					coverageReporter: {
						reporters: [
							{ type: 'text' },
							{ type: 'html' }
            ]
					},
          files: [
            'app/**/*.spec.js',
            'app/**/*.module.js',
            'app/**/*.config.js',
            'app/**/*.run.js',
            'app/**/*.js',
            'app/**/*.html'
          ],
					reporters: ['junit', 'progress', 'coverage'],
					preprocessors: {
						'app/**/*.html': 'ng-html2js',
						'app/**/!(*spec).js': 'coverage'
					},
          junitReporter: {
            outputDir: './',
            outputFile: 'test-results.xml',
            useBrowserName: false
          },
					ngHtml2JsPreprocessor: {
						moduleName: 'templates-generated',
						prependPrefix: '../app/',
						stripPrefix: 'app/'
					},
          plugins: ['karma-wiredep', 'karma-coverage', 'karma-ng-html2js-preprocessor', 'karma-junit-reporter', 'karma-jasmine', 'karma-phantomjs-launcher']
				}
			}
		},

		// Generate CSS from LESS files
		less: {
			generated: {
				files: [{
					'generated/css/app.css': ['app/app.less']
				}],
				options: {
					plugins: [require("less-plugin-glob")]
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
				remove: true
			},
			dist: {
				files: [{
          expand: true,
          src: ['generated/app/**/*.js'],
          dest: '.'
				}]
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

    symlink: {
      generated: {
        files: [
          { src: 'bower_components', dest: 'generated/bower_components' },
    //      { src: 'app', dest: 'generated/app' }
        ]
      }
    },
/*
		uglify: {
			dist: {
				files: {
					'dist/js/app.js': 'generated/js/app.js',
					'dist/js/vendor.js': 'generated/js/vendor.js'
				}
			}
		},
*/
    usemin: {
      html: 'dist/index.html'
    },

    useminPrepare: {
      html: 'dist/index.html',
      options: {
        dest: 'dist',
        root: 'generated'
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
		},

    wiredep: {
      generated: {
        bowerJson: require("./bower.json"),
        cwd: "generated",
        exclude: [/spec\.js/],
        includeSelf: true,
        src: ['generated/index.html'],
        overrides: {
          bootstrap: {
            main: ["dist/css/bootstrap.css"]
          }
        }
      }
    },
/*
		bower_concat: {
			all: {
				dest: {
					'js': 'generated/js/vendor.js'//,
					//'css': 'generated/css/bower.css'
				},
				bowerOptions: {
					relative: false
				}
			}
		}
*/
	});

	grunt.registerTask('default', ['core-build', 'express', 'browserSync', 'watch']);

	grunt.registerTask('core-build', [
    'mkdir:generated',
    'symlink:generated',
    'html2js:generated',

//    'concat:client',
//    'ngAnnotate:generated',
//    'concat:generated',
    'less:generated',
    'autoprefixer:generated',
    'copy:generated',

    'wiredep:generated'

//    'bower_concat'
  ]);

	grunt.registerTask('build', ['eslint', 'jshint', 'core-build', 'karma']);

	grunt.registerTask('dist', [
    'build', 
    'ngAnnotate:dist',
    'mkdir:dist', 
    'copy:dist',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    //'uglify:dist', 
    'cssmin:dist',
    'usemin'
  ]);
/*
	grunt.registerTask('dist', [
    'build', 
    'mkdir:dist', 
    'copy:dist', 
    'uglify:dist', 
    'cssmin:dist'
  ]);
*/
	grunt.registerTask('deploy', ['dist']);
	grunt.registerTask('test', ['eslint', 'jshint', 'karma']);

	grunt.task.registerTask('yo', 'Yeoman task', function (generator, name) {
		grunt.task.run("exec:" + this.name + ":" + generator + ":" + name);
	});

	// When a grunt build fails, display OS specific notifications on the screen
	grunt.task.run('notify_hooks');
};
