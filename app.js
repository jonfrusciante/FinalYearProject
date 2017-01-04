var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  fs = require('fs');

var port = process.env.PORT || 3000;

var app = express();
var staticRoot = __dirname + '/client/';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(staticRoot));

app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

app.post('/accounts', require('./checkAccount')); 

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
