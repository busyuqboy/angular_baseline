var gulp = require('gulp');  
var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {  
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        },
	open: false,
	port: 3000
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});