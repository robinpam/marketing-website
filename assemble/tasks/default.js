var assemble = require('../assemble');

assemble.task('default', function() {
  assemble.src('templates/index.hbs')
    .pipe(assemble.dest('build'));
});