
describe("Log In", function () {
  it("should log in", function () {
    browser.url('/');

    var title = browser.getTitle()
    console.log('Title is: ' + title);

    browser.click('.shop-callout a');

    var productTitle = browser.getTitle()
    console.log('Title is: ' + productTitle);

    var url = browser.getUrl();
    console.log('Url is: ' + url);
  });
});
