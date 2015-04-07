var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compress', function() {
  gulp.src('public/js/plugins.js')
    .pipe(uglify())
    .pipe(rename("plugins.min.js"))
    .pipe(gulp.dest('public/js/'));

  gulp.src('public/js/main.js')
    .pipe(uglify())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
    gulp.watch('public/js/*.js', ['compress']);
});