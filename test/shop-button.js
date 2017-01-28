
describe("Shop CTA Button", function () {
  it("should link to the product page", function() {
    return browser
        .url('/')
        .getTitle().then(function(title) {
            console.log('Title is: ' + title);
    })
        .click('.shop-callout a')
        .getTitle().then(function(title) {
            console.log('Title is: ' + title);
            // outputs:
            // "Title is: WebdriverIO (Software) at DuckDuckGo"
        })
        .getUrl().then(function(url) {
            console.log('Url is ' + url);
        })
  });
});
