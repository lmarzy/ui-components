module.exports = {
  'Home page test': (client) => {
    const page = client.page.home();

    page.navigate()
      .assert.title('@title');

    client.end();
  }
};
