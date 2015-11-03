var webdriverio = require('webdriverio');
var client = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'firefox'
  }
});

client
  .init()
  .url('http://www.dnilabs.com/dnilabs/kontakt/')
  .setValue('#firstname', 'Daniel Krahofer')
  .setValue('#email', 'office@dnilabs.com')
  .setValue('#message', 'Nachricht')
  .submitForm('#mailform')
  .pause(5000)
  .end();
