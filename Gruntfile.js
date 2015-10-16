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
          reportFormats: ['cobertura', 'lcovonly', 'html'],
        },
      },
    },
  });

  grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};
