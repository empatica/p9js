var gulp = require('gulp'),
  rename = require('gulp-rename'),
  del = require('del'),
  ts = require('gulp-typescript'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

var src = './src',
  build = './build',
  dist = './dist',
  p9js = 'p9.js',
  p9min = 'p9.min.js';

gulp.task('build', ['build:min'], function () {
  return console.log("COMPLETED");
})

gulp.task('clean', function(){
  return del([build, dist]);
})

gulp.task('build:concat', ['build:full'], function () {
  return gulp.src(build + '/**/*.js')
    .pipe(gulp.dest(dist));
})

gulp.task('build:full', ['clean'], function () {
  return gulp.src([src + '/**/*.ts'])
    .pipe(ts({
      declaration: false,
      removeComments: true,
      target: "ES5",
      module: "amd",
      noImplicitAny: false,
      outFile: p9js
    }))
    .pipe(gulp.dest(build));
})

gulp.task('build:min', ['build:concat'], function () {
  return gulp.src(dist + '/' + p9js)
    .pipe(uglify())
    .pipe(rename(p9min))
    .pipe(gulp.dest(dist));
})