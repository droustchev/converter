/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-istanbul');

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          mask: '*.js'
        },
      },
      coveralls: {
        src: 'test',
        options: {
          //src: 'coverage/*', //coverage output location
          force: false, // throw errors, preventing CI builds
          reportFormats: ['html', 'lcovonly', 'cobertura', 'text-summary', 'text'],
        },
      },
    },
  });

  grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};
