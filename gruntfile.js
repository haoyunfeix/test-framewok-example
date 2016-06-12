module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
          options: {
              banner: "/*  The concated banner! */"
          },
          dist1: {
              src: ['src/a.js', 'src/b.js'],
              dest: 'dist/result1.js'
          },
          dist2: {
              src: ['src/a.js', 'src/c.js'],
              dest: 'dist/result2.js'
          }

        },
        jshint: {
            all: ['dist/result1.js', 'src/*.js']
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                },
                src: ['test/*.js']
            }
        },
        run: {
            nativetest: {
                cmd: "test/native/nativetest.sh",
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default',['concat', 'jshint', 'mochaTest','run']);
}
