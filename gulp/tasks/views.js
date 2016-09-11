// TASK - NUNJUCKS - CONVERT NUNJUCKS PAGES TO HMTL

'use strict';

import gulp         from 'gulp';
import gutil        from 'gulp-util';
import plumber      from 'gulp-plumber';
import nunjucks     from 'gulp-nunjucks-html';
import fs           from 'fs';
import data         from 'gulp-data';
import frontMatter  from 'gulp-front-matter';
import htmlmin      from 'gulp-htmlmin';
import browserSync  from 'browser-sync';

import { config } from '../config/views';
import { isProduction, onError } from '../config/_global';

const reload = browserSync.reload;

gulp.task('views', () => {
  return gulp.src(config.src)
    .pipe(plumber(onError))
    .pipe(data(function(file) { return JSON.parse(fs.readFileSync(config.data)); }))
    .pipe(frontMatter({ property: 'frontMatter', remove: true }))
    .pipe(nunjucks({ searchPaths: config.paths }))
    .pipe(isProduction ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
});
