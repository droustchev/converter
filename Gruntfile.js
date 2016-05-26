var path = require("path");

/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    express: {
      test: {
        options: {
          script: 'app/server.js'
        }
      }
    },

    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          mask: '*.js',
          mochaOptions: ['--reporter', 'mocha-junit-reporter']
        },
      },
      coveralls: {
        src: 'test',
        options: {
          coverage: true,
          force: false, // throw errors, preventing CI builds
          mochaOptions: ['--reporter', 'mocha-junit-reporter'],
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

  grunt.registerTask('coveralls', ['express:test', 'mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['express:test', 'mocha_istanbul:coverage']);
};
