describe ("Homepage FAQ Accordion", function(){
  beforeEach(function() {
    browser.url("/");
  });


  it("should show first section on page load", function() {
    var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");

    expect(firstHeight.parsed.value).to.be.greaterThan(0);

  it("should not show other content", function() {
    var secondHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");


  })
})
