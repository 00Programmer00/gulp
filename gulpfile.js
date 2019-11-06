const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const runSequence = require('run-sequence')
//
// gulp.task('sass', function(){
//   return gulp.src('app/scss/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('app/css'))
// });
//
// gulp.task('watch', function() {
//   gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
// })

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'app'
//     },
//   })
// })

// gulp.task('sass-sync', function() {
//   return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// gulp.task('watch',  ['browserSync', 'sass-sync'], function (){
  // gulp.watch('app/scss/**/*.scss', ['sass-sync']);
  // gulp.watch('app/*.html', browserSync.reload);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
  // Other watchers
// });


gulp.task('default', function(){
    console.log('Hello')
})
