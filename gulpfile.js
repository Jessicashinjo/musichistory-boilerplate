"use strict"

 const gulp = require('gulp');
 const sass = require('gulp-sass')
 const jshint = require('gulp-jshint')
 const sassLint = require('gulp-sass-lint')


 const sassPath = './static/**/*.scss'
//checks on start to update changes to scss

gulp.task('sass:lint', () => {
  gulp.src(sassPath)
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
})

gulp.task('js:lint', () => (
 gulp.src('./lib/**/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('jshint-stylish'))
))

//compiles scss to css
gulp.task('sass:compile', () => (
 gulp.src('./static/**/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('./static'))
))

//watches for changes in scss
gulp.task('sass:watch', () => (
  gulp.watch(sassPath,
    ['sass:lint', 'sass:compile']
  )
))

gulp.task('sass', ['sass:lint', 'sass:compile', 'sass:watch'])
gulp.task('lint', ['js:lint', 'sass:lint'])
gulp.task('default', ['js', 'sass'])
