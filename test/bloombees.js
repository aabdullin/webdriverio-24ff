describe("Login", function () {
  it("should link to the login page", function() {
    browser.url('/');

    //browser.click("/html/body/top-nav/nav/nav/md-list/md-list-item[2]/section/div[2]/button[2]");
    // click log in button
    browser.waitForEnabled('#content-compiled', 3000);

    var input = $('#login_modal_email');
    input.setValue('rutrika@gmail.com');
    // set login

    var input2 = $('#login_modal_password');
    input2.setValue('Artur123');
    // set password

    browser.click('#content-compiled');
    // click button

    var url = browser.getUrl();
    expect(url).to.include('https://bloombees.com/private/dashboard', 'URL Mismatch');
  });
});
