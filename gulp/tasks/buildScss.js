var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('buildScss', function () {
	
  return gulp.src('./src/main/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./dist/css'));
  
});