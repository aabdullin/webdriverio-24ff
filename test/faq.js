describe("Homepage FAQ Accordion", function(){

  beforeEach(function() {
    browser.url("/");
  });

  it("should show first section on page load", function(){
    var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");

    expect(firstHeight.parsed.value).to.be.greaterThan(0);
  });

  it("should not show the other content"), function(){
    var secondHeight = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "height");

    console.log(secondHeight);

    expect(secondHeight.parsed.value).to.equal(0);
  })


})
