'use strict';

import autoprefixer   from 'autoprefixer';
import postCssVr      from 'postcss-vr';
import postCssPxtoRem from 'postcss-pxtorem';
import postCssFocus   from 'postcss-focus';
import cssMqPacker    from 'css-mqpacker';
import postCssNano    from 'cssnano';

import { path } from './_global';

export const config = {
  src: `${path.src}/css/global.scss`,
  uncssGlob: `${path.dev}/**/*.html`,
  uncssIgnore: [''],
  mapWrite: './map',
  dest: `${path.dev}/css`,
  processorsDev: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    postCssVr(),
    postCssPxtoRem(),
    postCssFocus()
  ],
  processorsProd: [
    cssMqPacker(),
    postCssNano()
  ]
};
