var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    return gulp.src('src/simple.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minifyjs', function(){
    return gulp.src('src/simple.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});

gulp.task('default', ['jshint'], function(){
    gulp.start('minifyjs');
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['default']);
});