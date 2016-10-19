var gulp = require('gulp');
var typescript = require('gulp-typescript');


gulp.task('buildTS', function() {

     //出力オプション
    //var typescriptProject = typescript.createProject({
    //    sortOutput: true
    //});

     gulp.src([
           
            '!./src/main/ts/@types/**',
            './src/main/ts/**/*.ts',
            '!./node_modules/**'//node_modules配下は除外する
          ])
         .pipe(typescript())
         .pipe(gulp.dest('./dist/js/'));
 });