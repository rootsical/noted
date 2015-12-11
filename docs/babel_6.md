#BABEL 6 SETUP

###install babel
`npm install --save-dev babel-core babel-polyfill babel-preset-es2015 gulp-babel gulp-plumber`  
- babel-polyfill is necessary for generators)  
- gulp-babel is necessary for use with gulp as is gulp-plumber which suppresses errors 

###gulpfile  
```
//gulpfile.babel.js
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';

gulp.task('transpile', function() {
	return gulp.src(['src/*.js'], {base:'src'})
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('dest'));
});
```

###.babelrc  
create .babelrc file
```
//.babelrc
{
"presets": ["es2015"]
}
```