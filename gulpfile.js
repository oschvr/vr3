/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

//Define plugins. Use 'npm i g [plugin] --save-dev' to install
var gulp = require('gulp');
var wrench = require('wrench');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');

//Define bower-components path
var dest_path = 'src';

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/**
 *  Custim task to inject bower components in html.
 **/
gulp.task('publish-components', function(){
  return gulp.src('./src/index.html')
    .pipe(inject(gulp.src(mainBowerFiles(), {read: false}, {relative: true}), {name: 'bower'}))
    .pipe(gulp.dest(dest_path));
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
