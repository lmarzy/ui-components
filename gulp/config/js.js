'use strict';

import { path } from './_global';

export const config = {
  src: `${path.src}/js/index.js`,
  outputName: 'main.js',
  presets: ["es2015"],
  dest: `${path.dev}/js`
};
