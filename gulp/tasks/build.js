// TASK -  BUILD

'use strict';

import gulp            from 'gulp';
import gutil           from 'gulp-util';
import runSequence     from 'run-sequence';

import { config } from '../config/build';
import { isProduction } from '../config/_global';

if(!isProduction) {
  gulp.task('default', (cb) => {
    runSequence(config.a, config.b, cb);
  });
}else {
  gulp.task('default', cb => {
    runSequence(config.a, config.b, config.c, cb);
  });
}
