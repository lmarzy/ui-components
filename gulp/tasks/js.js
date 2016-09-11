// TASK - BROWSERIFY - CONVERT ES6 AND MODULES USING BABELIFY WITH ES2015 PRESETS

'use strict';

import gulp         from 'gulp';
import gutil        from 'gulp-util';
import plumber      from 'gulp-plumber';
import browserify   from "browserify";
import babelify     from "babelify";
import source       from 'vinyl-source-stream';
import streamify    from 'gulp-streamify';
import uglify       from 'gulp-uglify';
import sourcemaps   from 'gulp-sourcemaps';
import browserSync  from 'browser-sync';

import { config } from '../config/js';
import { isProduction, onError } from '../config/_global';

const reload = browserSync.reload;

gulp.task('js', ['js:lint'], () => {
  return browserify(config.src, { debug: true })
  .transform(babelify.configure({ presets: config.presets }))
  .bundle()
  .pipe(source(config.outputName))
  .pipe(streamify(plumber(onError)))
  .pipe(isProduction ? streamify(uglify()) : gutil.noop())
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}))
});
