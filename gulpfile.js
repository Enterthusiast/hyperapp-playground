const gulp = require('gulp');
const babel = require('gulp-babel');
const runSequence = require('gulp-run-sequence');

gulp.task('babel', () => {
    return gulp.src('src/app/app.js')
        .pipe(babel({
            plugins: [
                ['transform-react-jsx', { 'pragma': 'h' }]
            ],
            presets: [
                ['es2015', {}]
            ]
        }))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('moveHtml', () => {
    return gulp.src('src/app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('moveVendors', () => {
    return gulp.src('./node_modules/hyperapp/dist/hyperapp.js')
        .pipe(gulp.dest('dist/vendors'));
});
 
gulp.task('default', () => {
    runSequence(
        'babel',
        'moveHtml',
        'moveVendors'
    )
});
