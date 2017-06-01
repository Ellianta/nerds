module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({
    // postcss: {
    //   options: {
    //     processors: [
    //       require("autoprefixer")({browsers:
    //         [
    //           "last 1 version",
    //           "last 2 Chrome versions",
    //           "last 2 Firefox versions",
    //           "last 2 Opera versions",
    //           "last 2 Edge versions"
    //         ]})
    //     ]
    //   },
    //   style: {src: "*.css"}
    // }
    // watch: {
    //   style: {
    //     files: ["*.css", "*.html"],
    //     tasks: ["grunt-browser-sync"]
    //    }
    //  },
    browserSync: {
      bsFiles: {
        src: ["*.css", "*.html"]
      },
      options: {
        server: {
          baseDir: "."
        }
      }
    }
  });
 grunt.registerTask("serve", ["browserSync"]);
};
