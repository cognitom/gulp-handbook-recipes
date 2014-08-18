var gulp   = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('coffee', function(){   // define a task `coffee`
  return gulp.src('src/*.coffee') // read files from `src`
    .pipe(coffee())               // 1. compile CoffeeScript files
    .pipe(concat('main.js'))      // 2. concat multiple files
    .pipe(uglify())               // 3. minify(uglify) a JavaScript file
    .pipe(gulp.dest('dist/'));    // save it to `dist`
});
