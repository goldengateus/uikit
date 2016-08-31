// gulp
var gulp = require('gulp');

// plugins
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var opn = require('opn');

// tasks
// TypeScript compile
gulp.task('ts', function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
    .pipe(gulp.dest('app'));
});
// Compiles LESS > CSS 
gulp.task('build-less', function(){
    return gulp.src('app/less/*.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('app/css'));
});

gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
 return gulp.src(['./dist/*','./app/**/*.js','!./app/bower_components/**'], {read: false})
    .pipe(clean());
    
});


gulp.task('minify-css',['build-less'], function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('minify-js',['ts'], function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])

    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('copy-images', function () {
  gulp.src('./app/images/*')
    .pipe(gulp.dest('dist/images'));
});
gulp.task('connectDev', function () {
  connect.server({
    root: 'app/',
    port: 1982,
     livereload: true,
    host:'local.goldengate.us'  
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 1900, 
    livereload: true,
    host:'local.goldengate.us'
  });
});

gulp.task('serve', ['connectDev'], function () {
  return opn('http://local.goldengate.us:1982');
});

gulp.task('serve:dist', ['connectDist'], function () {
  return opn('http://local.goldengate.us:1900');
});


gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['minify-css', 'minify-js','lint', 'copy-html-files', 'copy-bower-components','copy-images']
  );
});
