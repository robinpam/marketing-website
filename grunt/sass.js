module.exports = {
  prod: {
    options: {
      sourceMap: false,
      imagePath: '<%= grunt.config.get("sassImagePath") %>',
      precision: 3,
      outputStyle: 'compressed'
    },
    files: [
      {
        src: '<%= config.guts %>/assets/css/styles.scss',
        dest: '<%= config.temp %>/css/styles.css'
      }
    ]
  },
  dev: {
    options: {
      sourceMap: false,
      imagePath: '<%= grunt.config.get("sassImagePath") %>',
      precision: 3
    },
    files: [
      {
        src: '<%= config.guts %>/assets/css/styles.scss',
        dest: '<%= config.temp %>/css/styles.css'
      }
    ]
  }
};
