// TASK - HTML-VALIDATOR

import gulp         from 'gulp';
import gutil        from 'gulp-util';
import htmlv        from 'gulp-html-validator';

import { config } from '../config/validator';
import { isProduction } from '../config/_global';

gulp.task('htmlValidation', () => {

    if(!isProduction) {
      gulp.src(config.src)
      .pipe(htmlv({format: config.format}))
      .pipe(gulp.dest(config.dest));
    }

});
