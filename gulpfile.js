'use strict';

var gulp        = require('gulp'),
	browserSync = require('browser-sync'),
	reload      = browserSync.reload;

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: '/'
		}
	});

	gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], reload);
});