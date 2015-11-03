var webdriverio = require('webdriverio');
var client = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'firefox'
  }
});

client
  .init()
  .url('http://dnilabs.com/kontakt')
  .end();
