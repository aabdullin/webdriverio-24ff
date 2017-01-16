var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.intersport-ufa.ru/')
    .getText("//ul[@id='mylist']/li[3]/div/div/a").then(function (link) {
      // use console.log() to output information
      console.log('Link found: ' + link);
    this.timeout(10000);
    .end();
