const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', () => {
    return gulp
        .src([
            'src/**/*.js',
            '!src/**/__tests__/*'
        ])
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.start('build');
    return gulp.watch('./src/**/*.js', ['build']);
});
