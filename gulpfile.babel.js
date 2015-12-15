import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import plumber from 'gulp-plumber';
import rename from 'gulp-regex-rename';
import electronConnect from 'electron-connect';

let electron = electronConnect.server.create();

gulp.task('start', function() {
  electron.start();
});

gulp.task('transpile', function() {
  return gulp.src(['src/**/*.src.js'], {
      base: 'src'
    })
    .pipe(plumber())
    .pipe(babel())
    .pipe(rename(/\.src\.js$/, '.js'))
    .pipe(gulp.dest('lib'));
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.src.js'], gulp.series('transpile', electron.restart));
  gulp.watch(['views/**/*.html'], gulp.series(electron.reload));
});

gulp.task('default',
  gulp.series(
    'transpile',
    gulp.parallel('start', 'watch')
  )
);