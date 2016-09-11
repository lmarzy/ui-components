// TASK - CSS-LINT - Lint all styles while in development

'use strict';

import gulp           from 'gulp';
import gulpStylelint  from 'gulp-stylelint';
import browserSync    from 'browser-sync';

import { config } from '../config/css-lint';

const reload = browserSync.reload;

gulp.task('css:lint', () => {
  return gulp
    .src(config.src)
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
