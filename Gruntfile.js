'use strict';
module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regerate.
  //
  // You have been warned!


  // Put your own grunt config here
  grunt.initConfig({

    // Import Bourbon, Neat and Wyrm. Generate CSS from the /sass/ folder
    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: ['sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['app.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
    copy: {
      foundation: {
        files: [
          {expand: true, cwd: 'bower_components/foundation/scss/', src: ['**/*'], dest: 'sass'},
          {expand: true, cwd: 'bower_components/foundation/js/', src: ['**/*'], dest: 'static/javascript/foundation/'},
        ]
      }
    },
    // Watch for sass changes and build css using the sass task we set above
    watch: {
      options : {
        files: ['sass/**/*.scss'],
        tasks: ['sass','build']
      },
    }
  });

  // Run grunt:reqs to copy the required files from bower
  grunt.registerTask('reqs', ['copy']);

  // These are the custom grunt packages we're adding
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};



