module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: true,
			},
			scripts: {
				files: ['*.js','routes/*.js', 'public/js/**/*.js'],
				tasks: ['clean', 'jshint', 'uglify'],
				options: {
					spawn: false
				}
			},
			scss: {
				files: ['public/css/sass/*.scss', 'public/css/sass/*/*.scss'],
				tasks: ['compass', 'combine_mq', 'cssmin'],
				options: {
					spawn: false
				}
			}
		},

		clean: {
			js: ['public/js/*.js']
		},

		jshint: {
			all: ['Gruntfile.js', 'app.js', 'routes/*.js', 'public/js/**/*.js']
		},

		uglify: {
			build: {
				files:[{
					expand: true,
					src: '*.js',
					cwd: 'public/js/src',
					dest: 'public/js',
					ext: '.min.js'
				}]
			}
		},

		compass: {
			dist: {
				options: {
					config: 'compass_config.rb',
					sassDir: 'public/css/sass',
					cssDir: 'public/css',
					environment: 'development'
				}
			}
		},

		combine_mq: {
			options: {
				beautify: false
			},
			main: {
				src: 'public/css/style.css',
				dest: 'public/css/style.css'
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'public/css/sass',
					src: ['public/*.css']
				}]
			}
		}


	});

	grunt.registerTask('default', [
		'grunt-contrib-clean',
		'grunt-contrib-jshint',
		'grunt-contrib-uglify',
		'grunt-contrib-compass',
		'grunt-contrib-combine-mq',
		'grunt-contrib-cssmin'
	]);
};