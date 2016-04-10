# NPM

##INITIALISE PROJECT
```
npm init
```

## GLOBAL
```
npm install -g gulp-cli electron-prebuilt mocha electron-mocha cult
```

## DEPENDENCIES
```
npm install --save systemjs
```

## DEVELOPMENT DEPENDENCIES
```
npm install --save-dev \
  "gulpjs/gulp#4.0" \
  babel-core \
  babel-plugin-transform-es2015-modules-commonjs \
  babel-preset-es2015 \
  gulp-babel \
  gulp-plumber \
  gulp-regex-rename \
  gulp-nodemon \
  electron-prebuilt \
  electron-connect \
  electron-mocha \
  fs-extra \
  expect.js
```
# COMMANDS
to view available package versions:  
`npm view <package name> versions`

to view latest version:  
`npm view <package name> version`

to install a particular package version:  
`npm install <package name>@<version>`

to install a package before a particular version:  
`npm install <package name>@"<<version>"` (ie it uses a less than sign)

list global packages:  
`npm list -g`
