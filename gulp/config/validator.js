'use strict';

import { path } from './_global';

export const config = {
  src: `${path.dev}/**/*.html`,
  dest: `${path.dev}/validation`,
  format: 'html'
};
