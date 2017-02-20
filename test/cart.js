describe ("Cart functionality", function() {
  beforeEach(function () {
    browser.url("/product-page.html");
  });

  it ('should only let you buy after setting a quantity', function () {
    var isBtnEnabled = browser.isEnabled("#buyNowButton");
    expect(isBtnEnabled, "'buy now' should be disabled to begin").to.be.false;

    // Add quantity
    browser.setValue("#qty", 10);

    isBtnEnabled = browser.isEnabled("#buyNowButton");
    expect(isBtnEnabled, "'buy now' is now enabled").to.be.true;
  });

  describe("checkout process", function(){
    beforeEach(function () {
      
    });
  });
});
