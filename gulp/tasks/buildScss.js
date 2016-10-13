var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('buildScss', function () {
	
  return gulp.src('./src/main/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
  
});