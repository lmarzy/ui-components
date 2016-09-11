// TASK - NUNJUCKS - CONVERT NUNJUCKS PAGES TO HMTL

'use strict';

import gulp         from 'gulp';
import htmlhint     from 'gulp-htmlhint';
import a11y         from 'gulp-a11y';

import { config } from '../config/audit';

gulp.task('audit', () => {
  return gulp.src(config.src)
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(a11y())
    .pipe(a11y.reporter());
});
