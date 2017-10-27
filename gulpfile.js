var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');

gulp.task('sass', function () {  
    gulp.src('assets/scss/**.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["**/*.html", "assets/css/*.css", "assets/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
	gulp.watch("**/*.html").on('change', browserSync.reload);
});

gulp.task('serveprod', function() {
	connect.server({
		root: "./",
		port: prcess.env.PORT || 5000,
		livereload: false
	});
});