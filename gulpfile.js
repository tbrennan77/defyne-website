// Requires gulp (obvs)
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requires BrowserSync
var browserSync = require('browser-sync').create();
// Require UserRef
var useref = require('gulp-useref');

// Run sass by defuault
gulp.task("default", function () {
  gulp.start("sass");
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp Watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('*.php', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})

// BrowserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})