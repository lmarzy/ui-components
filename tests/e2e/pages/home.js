const pagesData = require('../data/pages');

module.exports = {
  url: function () {
    return `${this.api.launch_url}${pagesData.home.url}`;
  },
  elements: {
    title: pagesData.home.title,
    siteHeader: pagesData.home.siteHeader,
    siteFooter: pagesData.home.siteFooter,
    componentList: pagesData.home.componentList
  }
};
