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
          coverage: true,
          force: false, // throw errors, preventing CI builds
          reportFormats: ['html', 'lcovonly', 'cobertura', 'text-summary', 'text'],
        },
      },
    },
  });

  grunt.event.on('coverage', function(lcov, done){
    require('coveralls').handleInput(lcov, function(err){
      if (err) {
        return done(err);
      };
      done();
    });
  });

  grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};
