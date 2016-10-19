var gulp = require('gulp');
var ejs = require("gulp-ejs");
var gulpPrettify = require("gulp-prettify");

gulp.task('buildEJS', function() {

    var ejs_src = ["./src/main/ejs/**/*.ejs", "!./src/main/ejs/**/_*.ejs"];
	gulp.src(ejs_src)
	.pipe(ejs({},{"ext": ".html"}))
	.pipe(gulpPrettify())
	.pipe(gulp.dest("./dist/"));

});