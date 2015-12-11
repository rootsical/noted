import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import rename from 'gulp-regex-rename';


gulp.task('transpile', function() {
  return gulp.src(['src/*.src.js', {base: 'src'})
    .pipe(plumber())
    .pipe(babel())
    .pipe(rename(/\.src\.js$/, '.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch(['src/*.src.js'], gulp.series('transpile'));
});

gulp.task('default', 
	gulp.series('transpile', 'watch')
);
