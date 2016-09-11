'use strict';

import gutil from 'gulp-util';

const paths = {
  src: './src',
  dev: 'dev',
  prod: 'dist'
}
const isProduction = gutil.env.prod ? true : false;

function onError(err) {
  gutil.log(gutil.colors.red(err.message));
  this.emit('end');
}

export { paths as path, isProduction, onError }
