var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs-locals');

var app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.engine('ejs', ejs);
//haha
//gdaga
app.get('/',function(req,res) {
	res.render('index');
});

app.listen(3000);