describe ('login', function () {
    beforeHook (function() {
      browser.url("/");
    });

    it ("render main header text correctly", function(done) {
      $('#musthead').should.have.attr('foo');
    });

    it ('login link is taking the user to the url', function() {
      browser.click('[@id="menu-item-27"]/a');
      assert.equal(title, 'Sign in to QDashboard');
    });
});
