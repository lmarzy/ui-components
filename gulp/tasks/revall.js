// TASK - REVALL - revisions all assets

'use strict';

import gulp         from 'gulp';
import gutil        from 'gulp-util';
import plumber      from 'gulp-plumber';
import RevAll       from 'gulp-rev-all';

import { config } from '../config/revall';
import { onError } from '../config/_global';


gulp.task('revAll', () => {
    var revAll = new RevAll({
      dontRenameFile: config.dontRename
    });
    gulp.src(config.src)
      .pipe(plumber(onError))
      .pipe(revAll.revision())
      .pipe(gulp.dest(config.dest));
});
