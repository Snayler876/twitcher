module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		nodewebkit: {
			options: {
				build_dir: "./build",
				win: false,
				mac: false,
				linux32: false,
				linux64: true
			},
			src: ['./src/**/*', './package.json']
		},

		compass: {
			dist: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'src',
					fontsDir: 'src/fonts',
					specify: 'src/sass/main.sass'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/sass/**/*.sass'],
				tasks: ['compass']
			}
		},

		shell: {
			start: {
				command: '"build/cache/linux64/0.9.2/nw" .'
			}
		}
	});

	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['compass', 'watch']);
	grunt.registerTask('build', 'nodewebkit');
	grunt.registerTask('start', 'shell');
}