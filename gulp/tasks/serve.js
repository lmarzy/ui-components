// TASK - SERVE

'use strict';

import gulp         from 'gulp'
import gutil        from 'gulp-util'
import browserSync  from 'browser-sync'

import { config } from '../config/serve';

const reload = browserSync.reload;

gulp.task('serve', ['default'], () => {

    browserSync({
        notify: config.notify,
        server: {
            baseDir: config.baseDirectory
        },
        open: config.browserOpen
    });

    [ 'html', 'css', 'js', 'img' ].forEach(function(target) {
        gulp.watch(config.watch[target].src, [config.watch[target].task]);
    });

});
