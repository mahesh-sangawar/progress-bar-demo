module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ['dist'],

		copy: {
			files: {
				cwd: 'app', 
				src: ['**/*'], 
				dest: 'dist', 
				expand: true 
			}
		},

		concat: {
			js: {
				src: ['./app/components/*.js',
					'./app/view-wrapper/*.js',
					'./app/*.js'
				],
				dest: './dist/app.js'
			}
		},

		uglify: {
			js: {
				src: ['./dist/app.js'],
				dest: './dist/app.js'
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean', 'copy', 'concat', 'uglify']);

}