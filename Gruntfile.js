module.exports = function(grunt) {
  grunt.initConfig({
      jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {
          jQuery: true,
          window: true,
        }
      },
    gruntfile: {
        src: 'Gruntfile.js'
    },
      },
    nodeunit: {
        files: ['tests/nodeTests.js'],
        options: {
            reporter : 'default'
        }
    },
    concat: {
        options: {
            separator: ';',
        },
        dist: {
            src: ['src/big-stupid-header.js','lib/esprima.js','lib/escodegen.schizo.js','src/schizo-main.js'],
            dest: 'schizo.js',
        },
    }
      
  });

  // Default task.
  grunt.registerTask('default');

  grunt.loadNpmTasks('grunt-contrib-concat');
};
