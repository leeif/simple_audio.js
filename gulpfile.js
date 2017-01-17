var minify = require('gulp-minify');
var gulp = require("gulp");
 
gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['compress'], function() {
    gulp.watch(['src/*.js'], ['compress']);
});