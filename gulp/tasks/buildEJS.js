var gulp = require('gulp');
var ejs = require("gulp-ejs");

gulp.task('buildEJS', function() {

    var ejs_src = ["./src/main/ejs/**/*.ejs", "!./src/main/ejs/**/_*.ejs"];
	gulp.src(ejs_src)
	.pipe(ejs({},{"ext": ".html"}))
	.pipe(gulp.dest("./dist/"));

});