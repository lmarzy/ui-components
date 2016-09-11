// TASK - ASSETS - FOR MOVING ACROSS CSS ASSETS, IMAGES AND ANY OTHER NEEDED BY THE PROJECT

'use strict';

import gulp            from 'gulp';
import gutil           from 'gulp-util';
import imagemin        from 'gulp-imagemin';
import browserSync     from 'browser-sync';

import { config } from '../config/images';
import { isProduction } from '../config/_global';

const reload = browserSync.reload;

gulp.task('images', () => {
    return gulp.src(config.src)
    .pipe(isProduction ? imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }) : gutil.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
});
