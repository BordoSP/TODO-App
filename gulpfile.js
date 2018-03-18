var sass = require("gulp-sass");
var gulp = require("gulp");

gulp.task("sass", function() {
   gulp.src("css/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("css/"))
});


gulp.task("watch", function() {
   gulp.watch("css/style.scss", ["sass"]);
});

gulp.task('default', ['watch']);