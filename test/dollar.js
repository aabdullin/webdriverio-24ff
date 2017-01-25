var expect = require ("mocha")

describe('$', function() {
  it('should find the first element that matches', function()  {
    browser.url("/");
    var el = browser.$("#docsearch input[type='text']");

    console.log(browser.getAttribute('placeholder'));
  });
});
