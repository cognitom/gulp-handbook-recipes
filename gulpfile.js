var path    = require('path');
var gulp    = require('gulp');
var zip     = require('gulp-zip');
var foreach = require('gulp-foreach');

gulp.task('zip', function(){
  return gulp.src('recipe/*')
    .pipe(foreach(function(stream, file){
      var name = path.basename(file.path);
      return gulp.src([
          name + '/**/*',
          '!' + name + '/node_modules/**/*',
          '!' + name + '/dist/**/*'
        ], { cwd: 'recipe/' })
        .pipe(zip(name + '.zip'));
    }))
    .pipe(gulp.dest('download/'));
});
