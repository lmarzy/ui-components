module.exports = {
  'Home page test': (client) => {
    const page = client.page.home();

    page.navigate()
    .assert.title('@title');
    page.expect.element('@siteHeader').to.be.present;
    page.expect.element('@siteFooter').to.be.present;
    page.expect.element('@componentList').to.be.present;

    client.end();
  }
};
