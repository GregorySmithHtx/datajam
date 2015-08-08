module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      options:{
        livereload: true,
      },
      html:{
        files: ['index.html'],
        
      },
      js:{
        files: ['js/*.js'],
      },
      css:{
        files: ['css/*.css'],
      }
    },
    togeojson: {
      maps: {
        files: ['*.kml']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-togeojson');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('togeojson', ['togeojson']);
};