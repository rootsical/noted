import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';

gulp.task('transpile', function() {
	return gulp.src(['src/*.js'], {base:'src'})
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('dest'));
});

