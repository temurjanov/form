var gulp = require('gulp');
    browserSync = require('browser-sync').create();
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');   
    reload = browserSync.reload;

var src = {
    sass: 'app/sass/**/*.sass',
    css: 'app/css',
    js: 'app/js/*.js',
    html: 'app/*.html'
};

// Static Server + watching scss/html/js files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './app'
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.js).on('change', reload);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp
        .src(src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(src.css))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);
