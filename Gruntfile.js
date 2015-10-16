/*global module:false*/
module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-coveralls');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          mask: '*.js'
        }
      },
    },

    coveralls: {
      options: {
        force: false, // prints errors, preventing CI builds
      },
      all: {
        src: 'coverage/*',
      },
    },
  });
};
