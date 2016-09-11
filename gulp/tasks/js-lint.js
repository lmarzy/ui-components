// TASK - ES-LINT - Lint all js files while in development

'use strict';

import gulp         from 'gulp';
import eslint       from 'gulp-eslint';

import { config } from '../config/js-lint';

gulp.task('js:lint', () => {
  return gulp.src(config.src)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
});
