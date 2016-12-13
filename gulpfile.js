var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    return gulp.src('lib/simple.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minifyjs', function(){
    return gulp.src('lib/simple.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('lib'));
});

gulp.task('default', ['jshint'], function(){
    gulp.start('minifyjs');
});

gulp.task('watch', function() {
	gulp.watch('lib/*.js', ['default']);
});