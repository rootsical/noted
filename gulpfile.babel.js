import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import plumber from 'gulp-plumber';
import rename from 'gulp-regex-rename';
import electronConnect from 'electron-connect';
import childProcess from 'child_process';

let spawn = childProcess.spawn;
let electron = electronConnect.server.create();


gulp.task('start', function() {
  electron.start();
});

gulp.task('transpile', function() {
  return gulp.src(['src/**/*.src.js'], {
      base: 'src'
    })
    .pipe(plumber())
    .pipe(babel({
      babelrc: false,
      plugins: ['babel-plugin-transform-es2015-modules-commonjs']
    }))
    .pipe(rename(/\.src\.js$/, '.js'))
    .pipe(gulp.dest('lib'));
});

gulp.task('test:renderer', function(done){

  let electronMocha = spawn('electron-mocha', [
    '--renderer',
    '--require',
    'babel-core/register', 
    '--no-timeouts',
    'test/renderer'
  ]);

  // electronMocha.stdout.setEncoding('utf8');
  electronMocha.stdout.on('data', function (data) {
    process.stdout.write(data.toString());
  });

  electronMocha.on('error', function (err) {
    console.log('Failed to start child process.');
  });

  electronMocha.on('close', function (code, signal) {
    // console.log('child process terminated with code: ' + code);
    // console.log('child process terminated due to receipt of signal: ' + signal);
    done();
  });
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