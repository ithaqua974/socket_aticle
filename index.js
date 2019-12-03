var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('ejs');
var ejs = require('ejs');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/public/"));

var http = require('http').Server(app);
var io = require('socket.io')(http);

var server = http.listen(3000, () => {
    console.log('server is runnig', server.address().port);
});