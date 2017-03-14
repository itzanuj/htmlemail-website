module.exports = function(grunt) {
 
  // Checks the dependencies associated with Grunt and autoloads
  // & requires ALL of them in this Gruntfile
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
 
  // Project configuration.
  grunt.initConfig({





    // Sass configuration
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          '_assets/css/main.css': '_assets/css/scss/main.scss'
        }
      }
    },





    // Use PostCSS Autoprefixer to apply browser prefixes for certain styles
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')({
              browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        files: {
          'css/main.css': '_assets/css/main.css'
        }
      }
    },





    // Use minify CSS to minify the output
    cssmin: {
      options: {
        mergeIntoShorthands: true,
        roundingPrecision: -1,
        'processImport': false
      },
      target: {
        files: {
          'css/main.css': ['css/main.css']
        }
      }
    },





    // SVG Sprites
    svg_sprite: {
      icons: {
        expand: true,
        cwd: '_assets/img',
        src: ['src/*.svg'],
        dest: 'img/',
        options: {
          mode: {
            symbol: true
          }
        }
      }
    },





    // Compress images
    imagemin: {
      options: {
        optimizationLevel: 5
      },
      dist: {
        files: [{
          expand: true,
          cwd: '_assets/img',
          src: ['*.{png,jpg,gif}'],
          dest: 'img'
        }]
      }
    },





    // JS Concat
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js', 
          'bower_components/typed.js/dist/typed.min.js', 
          'node_modules/smooth-scroll/dist/js/smooth-scroll.min.js', 
          'bower_components/moment/min/moment.min.js', 
          'node_modules/js-cookie/src/js.cookie.js', 
          'node_modules/lity/dist/lity.min.js', 
          '_assets/js/main.js'
        ],
        dest: '_assets/js/build.js',
      },
    },

    // JS Minify
    uglify: {
      my_target: {
        files: {
          'js/build.js': ['_assets/js/build.js']
        }
      }
    },
 




    //Watches files and folders for us
    watch: {
      css: {
        files: [
          '_assets/css/**/*.scss'
        ],
        tasks: [
          'sass',
          'postcss',
          'cssmin'
        ]
      },
      scripts: {
        files: [
          '_assets/js/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      html: {
        files: [
          '**/*.{html,markdown,md}',
          '!_site'
        ],
        tasks: [
          'shell:jekyllBuild'
        ]
      },
      images: {
        files: [
          '_assets/img/*.{png,jpg,gif}'
        ],
        tasks: [
          'newer:imagemin'
        ]
      },
      svg: {
        files: [
          '_assets/img/src/*.{svg}'
        ],
        tasks: [
          'newer:svg_sprite'
        ]
      }
    },





    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      },
      jekyllDrafts: {
        command: 'jekyll serve --drafts'
      }
    }
 
  });
 
  // Register the grunt serve task
  grunt.registerTask('serve', [
    'concurrent:serve'
  ]);

  // Register build as the default task fallback
  grunt.registerTask('default', ['sass',
                                'postcss',
                                'cssmin',
                                'concat',
                                'uglify',
                                'newer:imagemin',
                                'newer:svg_sprite',
                                'shell:jekyllServe',
                                'watch']);

  // Serve with drafts too
  grunt.registerTask('drafts', ['sass',
                                'postcss',
                                'cssmin',
                                'concat',
                                'uglify',
                                'newer:imagemin',
                                'newer:svg_sprite',
                                'shell:JekyllDrafts',
                                'watch']);

};
