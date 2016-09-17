'use strict';

import { path } from './_global';

export const config = {
  src: `${path.dev}/**`,
  dontRename: [/^\/favicon.ico$/g, '.html', '.xml'],
  dontUpdateReference: ['.html'],
  dest: path.prod,
};

// module.exports = {
//   src: path.dest + '**',
//   dontSearchFile: [/.*\.pdf/g],
//   dontRenameFile: [/^\/favicon.ico$/g, '.html', '.xml', 'logo.png', '1.png', '.pdf'],
//   dontUpdateReference: ['.html', 'logo.png', '1.png', '.pdf'],
//   dest: path.prod,
// }
