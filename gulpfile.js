var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var uglifycss = require('uglifycss');
var fs = require('fs');

gulp.task('minjs', function() {
  gulp.src(['./src/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
});


gulp.task('mincss', function() {

    var uglified = uglifycss.processFiles(
        [ 'src/style.css' ],
        { maxLineLen: 500, expandVars: true }
    );
    fs.writeFileSync('./public/css/style.min.css',uglified);

});



gulp.task('watch', function () {
    gulp.watch('src/*.js', ['minjs']);
    gulp.watch('src/*.css', ['mincss']);
});
