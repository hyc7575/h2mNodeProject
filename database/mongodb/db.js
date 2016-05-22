var mongoose = require('mongoose');

mongoose.connect('mongodb://hyc7575:s15031503@ds011903.mlab.com:11903/hyeok'); //db 연결

var db = mongoose.connection;

db.on('error',function(err) {
	console.log(err);
});
db.once('open', function () {
	console.log('mongoDB 연결 완료');
});

module.exports = db;
