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
		}
	});

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', []);
	grunt.registerTask('build', 'nodewebkit');
}