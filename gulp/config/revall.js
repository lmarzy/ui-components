'use strict';

import { path } from './_global';

export const config = {
  src: `${path.dev}/**`,
  dontRename: [/^\/favicon.ico$/g, 'html', '.xml'],
  dest: path.prod,
};
