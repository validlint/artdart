var gulp = require('gulp');
var sass = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
//run: gulp sass:watch
gulp.task('sass:watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

//Deploy task
//run: gulp deploy
gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});