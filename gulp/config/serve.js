'use strict';

import gutil    from 'gulp-util';
import { path } from './_global';

const dirToServe = gutil.env.prod ? 'dist' : 'dev';

export const config = {
  baseDirectory: dirToServe,
  notify: true,
  browserOpen: false,
  watch: {
    html: {
      src: [`${path.src}/views/**`, `${path.src}/components/**`],
      task: 'views'
    },
    css: {
      src: [`${path.src}/css/**`, `${path.src}/components/**`],
      task: 'css'
    },
    js: {
      src : [`${path.src}/js/**`, `${path.src}/components/**`],
      task: 'browserify',
      task: 'js'
    },
    img: {
      src: `${path.src}/img/**`,
      task: 'images'
    }
  }
};
