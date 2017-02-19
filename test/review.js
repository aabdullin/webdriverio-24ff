describe('The product review form', function() {
  beforeEach(function() {
    // Go to product page
      browser.url("/product-page.html");
  });

  it ('should add a review when submitted properly', function(done) {

    // Enter the email address
      browser.setValue('#review-email', 'rutrika@gmail.com');

    // Enter the review
      browser.setValue('#review-content', 'This is the review');

    // Submit the review
      browser.submitForm("#review-content");

    // Assert that our review now appears in the list
    // browser.debug();

      var hasReview = browser.isExisting(".comment=This is the review");
      expect(hasReview, "comment text exists").to.be.true;
  });


  it ('should show an error message if the input is wrong', function() {
      // assert that error message isn't showing to start
      var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
      expect(isErrorShowing).to.be.false;

      // submit form without entering content
      browser.submitForm("#review-content");

      // assert that error message is now showing
      var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
      expect(isErrorShowing).to.be.true;
  });


  it ('should hide the error message when input is corrected', function() {
      // submit form without entering content
      browser.submitForm("#review-content");

      // assert that error message is now showing
      var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
      expect(isErrorShowing).to.be.true;

      // Enter the email address
      browser.setValue('#review-email', 'rutrika@gmail.com');

      // move focus
      browser.click("#review-content");

      var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
      expect(isErrorShowing).to.be.false;

      browser.setValue("#review-content", "valid");
      browser.submitForm("#review-content");

      var isMainErrorShowing = browser.isVisible("p=There are some errors in your review.")
      expect(isErrorShowing).to.be.false;

  });


  // it should focus an error message if the input is wrong

});
