var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client')));

app.post('/accounts', function (req, res) {
  console.log('attempting to log in');
  res.send(false);
})

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
