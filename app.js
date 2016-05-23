var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs-locals');
var path = require('path');
var mongoose = require('mongoose');


var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var router = require('./routes')(app)

app.listen(3000);