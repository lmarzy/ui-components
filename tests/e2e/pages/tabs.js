const pagesData = require('../data/pages');

module.exports = {
  url: function () {
    return `${this.api.launch_url}${pagesData.home.url}`;
  },
  elements: {
    title: pagesData.tabs.title,
    siteHeader: pagesData.tabs.siteHeader,
    siteFooter: pagesData.tabs.siteFooter,
    componentList: pagesData.tabs.componentWrap
  }
};
