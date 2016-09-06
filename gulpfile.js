var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');


gulp.task('clean', function() {
   return del(['dist']);
});


gulp.task('sass',function(){
  return gulp.src( 'src/scss/js_utils.scss' )
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
   //  .pipe(concat( config.projectName + '.min.css'))
   //  .pipe(gulp.dest('dist'))
    .pipe(concat( 'js_utils.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'sass listo.' }));

})


gulp.task('js', function() {
   return gulp.src('src/**/*.js')
   //  .pipe(jshint('.jshintrc'))
   .pipe(jshint.reporter('default'))
   .pipe(concat('js_utils.js'))
   .pipe(gulp.dest('dist'))
   .pipe(rename({suffix: '.min'}))
   .pipe(uglify())
   .pipe(gulp.dest('dist'))
   .pipe(notify({ message: 'js_utils ready' }));
});

gulp.task('watch', function() {
   gulp.watch('src/**/*.js', ['js_utils']);
});

gulp.task('default', ['clean'], function() {
   gulp.start('js');
   gulp.start('sass');
});
