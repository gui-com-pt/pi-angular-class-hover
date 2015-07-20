var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    watch = require('gulp-watch');

var paths = {
    appModules: [
        './src/*.mdl.js',
        './src/**/*.mdl.js',
        './src/*.js',
        './src/**/*.js',
        './src/*.mdl.js'
    ]
};

gulp.task('scripts', function(){

    gulp.src(paths.appModules)
        .pipe(concat('pi-angular-class-hover.js'))
        .pipe(gulp.dest('./dist'));

    gulp.src(['./bower_components/angular/angular.js'])
      .pipe(concat('angular.js'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
    gulp.watch(paths.appModules, ['scripts']);
});

gulp.task('default', ['scripts']);
