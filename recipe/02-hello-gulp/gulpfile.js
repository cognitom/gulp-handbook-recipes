var gulp         = require('gulp');
var cssimport    = require('gulp-cssimport');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');
var rename       = require('gulp-rename');

gulp.task('style', function(){             // define a task `coffee`
  return gulp.src('src/style.css')         // read files from `src`
    .pipe(cssimport())                     // 1. process @import directive
    .pipe(autoprefixer('last 2 versions')) // 2. add/remove vender prefixes
    .pipe(minifyCss())                     // 3. minify css file
    .pipe(rename({ extname: '.min.css' })) // 4. change the file extention
    .pipe(gulp.dest('dist/'));             // save it to `dist`
});