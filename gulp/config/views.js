'use strict';

import { path } from './_global';

export const config = {
    src: `${path.src}/views/pages/**/*.html`,
    paths: [
      `${path.src}/views`,
      `${path.src}/views/layout`,
      `${path.src}/views/layout/head`,
      `${path.src}/views/layout/foot`,
      `${path.src}/views/partials`,
      `${path.src}/components/site-header`,
      `${path.src}/components/logo`,
      `${path.src}/components/site-navigation`,
      `${path.src}/components/site-footer`,
      `${path.src}/components/buttons`,
      `${path.src}/components/component-list`,
      `${path.src}/components/tabs`
    ],
    data: `${path.src}/views/global.json`,
    dest: path.dev
};
