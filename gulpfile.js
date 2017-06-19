// Requires gulp (obvs)
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task("default", function () {
  gulp.start("sass");
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});


gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
})