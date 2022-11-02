module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', '**/index.js'],
        options: {
          esversion: 6,  // accept function declarations with =>
          strict: false,
          node: true,
          laxbreak: true,
          laxcomma: false,
          "validthis": true,
          "globals": {
            "module": false
          },          
          asi: true  // ignore missing ;
        }
      },
      watch: {
        files: ['Gruntfile.js', 'index.html', '**/index.js', '**/*.png', '**/*.jpg'],
        // files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
            livereload: true
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: '.',
            livereload: true,
            open: {
              target: 'http://localhost:<%= connect.server.options.port %>'
            }
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
  
    grunt.registerTask('default', ['connect', 'watch']);
    // grunt.registerTask('default', ['jshint', 'connect', 'watch']);
  
  };