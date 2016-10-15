var gulp = require('gulp');

gulp.task('buildImage', function() {

    var image_src = ["./src/main/resources/images/**/*.jpg"];
	gulp.src(image_src)
	.pipe(gulp.dest("./dist/images/"));

});