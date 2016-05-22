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


mongoose.connect('mongodb://hyc7575:s15031503@ds011903.mlab.com:11903/hyeok');

var db = mongoose.connection;
db.on('error',function(err) {
	console.log(err);
});
db.once('open', function () {
	console.log('mongoDB 연결 완료');
});
var todoRoomListSchema = mongoose.Schema({
	//todoRoomList 컬렉션 스키마 레퍼런스 선언
	name: String,
	userNum: Number,
	maxUserNum: Number,
	headOfTeam: String,
	createdDate: String
});
var todoRoomList = mongoose.model("todoRoomList", todoRoomListSchema);



app.listen(3000);