var gulp = require('gulp');

gulp.task('buildJs', function() {

    var image_src = ["./src/main/js/**/*.js"];
	gulp.src(image_src)
	.pipe(gulp.dest("./dist/js/"));

});