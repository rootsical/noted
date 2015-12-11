import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import plumber from 'gulp-plumber';
import rename from 'gulp-regex-rename';
import electronConnect from 'electron-connect';

let electron = electronConnect.server.create({'path':'app'});

gulp.task('start', function(){
	electron.start();
});

gulp.task('transpile', function() {
  return gulp.src(['src/*.src.js'], {base: 'src'})
    .pipe(plumber())
    .pipe(babel())
    .pipe(rename(/\.src\.js$/, '.js'))
    .pipe(gulp.dest('app'));
});

gulp.task('views', function(){
	return gulp.src('src/views/*src.html', {base: 'src'})
		.pipe(rename(/\.src\.html$/, '.html'))
		.pipe(gulp.dest('app'))
	;
});

gulp.task('manifest', function(){
	return gulp.src('src/manifest/electron.package.json')
		.pipe(rename(/electron.package.json/, 'package.json'))
		.pipe(gulp.dest('app'))
	;
});

gulp.task('watch', function(){
	gulp.watch(['src/*.src.js'], gulp.series('transpile', electron.restart));
	gulp.watch(['src/views/*.src.html'], gulp.series('views', electron.reload));
	gulp.watch(['src/manifest/electron.package.json'], gulp.series('manifest', electron.restart));
});

gulp.task('default', 
	gulp.series(
		gulp.parallel('transpile','views', 'manifest'),
		gulp.parallel('start', 'watch')
	)
);
