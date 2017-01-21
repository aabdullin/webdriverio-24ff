var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.intersport-ufa.ru/')
    .click("//ul[@id='mylist']/li[3]/div/div/a")
    .pause('3000')
    .end();
