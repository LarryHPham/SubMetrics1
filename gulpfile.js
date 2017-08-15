var gulp             = require('gulp');
var babel            = require('gulp-babel');
var clean            = require('gulp-clean');
var concat           = require('gulp-concat');
var rename           = require('gulp-rename');
var uglify           = require('gulp-uglify-es').default; // works with ES6
var inject           = require('gulp-js-text-inject'); // used to parse out using RegExp ( @@import {filename.**} ) in javascript files and replacing them with inline contents from those filename.**
// /*******************************Minify Core Metrics**************************/
gulp.task('clean', function() {
    return gulp.src([
          'js/min/*',
          'js/max/*'
        ], {read: false})
        .pipe(clean({force: true}))
});

gulp.task('scripts', ['clean'],function() {
    return gulp.src([
                  'node_modules/core-metrics/js/max/main.max.js', // note this is pulled from another private repo location can be found in the SubMetric1/package.json
                  'js/*.js'
                ])
        .pipe(concat('main.max.js'))
        .pipe(gulp.dest('js/max'))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('js/min'))
});

gulp.task('build', ['clean','scripts'], function() {
    // place code for your default task here
});
