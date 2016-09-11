// TASK - STYLES - CONVERT SCSS FILES TO CSS

'use strict';

import gulp            from 'gulp';
import gutil           from 'gulp-util';
import plumber         from 'gulp-plumber';
import sass            from 'gulp-sass';
import postcss         from 'gulp-postcss';
import uncss           from 'gulp-uncss';
import glob            from 'glob';
import sourcemaps      from 'gulp-sourcemaps';
import gulpStylelint   from 'gulp-stylelint';
import browserSync     from 'browser-sync';

import { config } from '../config/css';
import { isProduction, onError } from '../config/_global';

const reload = browserSync.reload;
const processorsCombined = config.processorsDev.concat(config.processorsProd);

gulp.task('css', () => {
  return gulp.src(config.src)
    .pipe(plumber(onError))
    .pipe(isProduction ? gutil.noop() : sourcemaps.init())
    .pipe(sass())
    .pipe(isProduction ? postcss(processorsCombined) : postcss(config.processorsDev))
    .pipe(isProduction ? uncss({html: glob.sync(config.uncssGlob), ignore: config.uncssIgnore}) : gutil.noop())
    .pipe(isProduction ? gutil.noop() : sourcemaps.write(config.mapWrite))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
});
