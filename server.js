express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  app.use('/node_modules/', express.static(process.cwd()+"/node_modules/"));
  app.use('/data/', express.static(process.cwd()+"/data/"));
  app.render("index.html", function(err, html){
    res.send(html);
  });
});

var server = app.listen(3000, function () {
  console.log('app running at port 3000');
});
