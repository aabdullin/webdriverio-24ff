describe("Homepage FAQ Accordion", function(){
  it("should show first section on page load", function(){
    browser.url("/");


    var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");

    console.log(firstHeight)
  })
})
