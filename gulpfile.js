var gulp        = require('gulp');
var pug         = require('gulp-pug');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
const image     = require('gulp-image');
var browserSync = require('browser-sync').create();


gulp.task('html', function () {
  return gulp.src('source/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/'))
});

gulp.task('sass', function () {
  return gulp.src('source/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function () {
  return gulp.src('source/javascripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('image', function () {
  gulp.src('source/images/*')
    .pipe(image())
    .pipe(gulp.dest('build/images'));
});

// Static server
gulp.task('browser-sync', function () {

  browserSync.init({
    server: {
      baseDir: "build/"
    }
  });

  gulp.watch("source/sass/*.scss", ['sass']).on('change', browserSync.reload);
  gulp.watch("source/javascripts/*.js").on('change', browserSync.reload);
  gulp.watch("build/*.html").on('change', browserSync.reload);

});


gulp.task('default', ['html', 'sass', 'js', 'image', 'browser-sync'], function () {
  gulp.watch('source/*.pug', ['html']);
  gulp.watch('source/sass/**/*.scss', ['sass']);
  gulp.watch('source/javascripts/*.js', ['js']);
});