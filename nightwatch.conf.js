'use strict';

const SELENIUM = {
  start_process: true,
  server_path: './node_modules/nightwatch/bin/selenium.jar',
  host: '127.0.0.1',
  port: 4444,
  cli_args: {
    'webdriver.chrome.driver': './node_modules/nightwatch/bin/chromedriver'
  }
};

const CHROME = {
  desiredCapabilities: {
    browserName: 'chrome',
    javascriptEnabled: true // set to false to test progressive enhancement
  }
};

const DEFAULT_CONFIG = {
  launch_url: 'http://localhost:3000',
  chrome: CHROME,
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const ENVIRONMENTS = {
  default: DEFAULT_CONFIG
}

module.exports = {
  src_folders: [ "tests/e2e" ],
  page_objects_path: 'tests/e2e/pages',
  selenium: SELENIUM,
  test_settings: ENVIRONMENTS
}

require('selenium-download').ensure('./node_modules/nightwatch/bin', function(error) {
   if (error) {
     return console.log('Erroring ' + error);
   } else {
     console.log('✔ Selenium & Chromedriver downloaded to:', './bin');
   }
});
