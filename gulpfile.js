const { task, src, dest, series, watch } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

task('js:build', () => {
    return src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist'));
});

task('scss:build', () => {
    return src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist'));
})

task('minify-js', () => {
    return src('dist/*.js')
        .pipe(minify())
        .pipe(dest('dist/min'));
})

task('minify-css', () => {
  return src('dist/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist/min'));
});

task('default', series('js:build', 'scss:build', 'minify-js', 'minify-css'));

task('watch', () => {
    watch('src/*.js', series('js:build'));
    watch('src/*.scss', series('scss:build'));
    watch('dist/*.js', series('minify-js'));
    watch('dist/*.css', series('minify-css'));
})