// TASK - SITEMAP

'use strict';

import gulp     from 'gulp';
import sitemap  from 'gulp-sitemap';
import config   from '../config/sitemap';

gulp.task('sitemap', () => {

    gulp.src(config.src)
        .pipe(sitemap({
            siteUrl: config.url
        }))
    .pipe(gulp.dest(config.dest));

});
