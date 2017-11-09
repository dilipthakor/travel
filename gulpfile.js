var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
console.log('horrry you create someting')
});

gulp.task('html',function(){
  console.log('imagine someting useful being done to your html here.');
});

gulp.task('styles',function(){
  console.log('imagine sass or post task running here.');
});

gulp.task('watch',function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

   watch('./app/assets/styles/**/*.css', function(){
     gulp.start('styles');
   })
});
