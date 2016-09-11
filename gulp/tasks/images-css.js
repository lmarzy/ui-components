// TASK - IMAGES-CSS - To copy across any css related images

'use strict';

import gulp                from 'gulp';
import gutil               from 'gulp-util';
import imagemin            from 'gulp-imagemin';
import browserSync         from 'browser-sync';

import { config } from '../config/images-css';
import { isProduction } from '../config/_global';

const reload = browserSync.reload;

gulp.task('images:css', () => {
    return gulp.src(config.src)
    .pipe(isProduction ? imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }) : gutil.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
});
