var assert = require('chai').assert;

describe("Shop CTA Button", function () {
  it("should link to the product page", function() {
    browser.url('/');

    var title = browser.getTitle()
    assert.equal(title, 'Robot Parts Emporium');

    browser.click('.shop-callout a');

    var productTitle = browser.getTitle()
    assert.equal(productTitle, 'Totally Not Evil Sentient Robot - Robot Parts Emporium');

    var url = browser.getUrl()

    assert.include(url, 'product-page.html', 'URL Mismatch')
  });
});
