# GULP 4 SETUP

### global
`npm install -g "gulpjs/gulp-cli#4.0"`

###local
`npm install --save-dev "gulpjs/gulp#4.0"`

###gulpfile
create gulpfile to work with babel 6:  
`touch gulpfile.babel.js`

###gulp-regex-rename
`npm install --save-dev gulp-regex-rename`  
- example
```javascript
import rename from 'gulp-regex-rename';

gulp.task('transpile', function() {
  return gulp.src(['src/*.src.js', {base: 'src'})
    .pipe(babel())
    .pipe(rename(/\.src.\.js$/, '.js'))
    .pipe(gulp.dest('dist'));
});
```

###cult
to monitor gulpfile and reload gulp  
https://github.com/typicode/cult




