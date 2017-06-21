// Requires gulp (obvs)
var gulp 		= require('gulp');
// Requires the gulp-sass plugin
var sass 		= require('gulp-sass');
// Requires BrowserSync
var browserSync = require('browser-sync').create();
// Require UserRef
var useref 		= require('gulp-useref');
// Other requires...
var uglify 		= require('gulp-uglify'); 	// Minifies JS
var gulpIf 		= require('gulp-if');
var cssnano 	= require('gulp-cssnano');  // Minifies CSS
var imagemin 	= require('gulp-imagemin'); // Minifies Images
var cache 		= require('gulp-cache');	// Cache Gulp
var del 		= require('del');			// Use to delete the dist dir every time gulp runs
var runSequence = require('run-sequence');

// Run sass by defuault
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})

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

// UseRef 
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// Minify Images and cache them
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

// Gulp will copy `fonts` from `app` to `dist` whenever you run 'gulp fonts'
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

// Gulp will delete the `dist` folder for you whenever 'gulp clean:dist' is run
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// Sequence tasks
gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})