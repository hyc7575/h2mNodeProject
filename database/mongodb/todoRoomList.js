var mongoose = require('mongoose');
var schema = mongoose.Schema({
	//todoRoomList 컬렉션 스키마 레퍼런스 선언
	name: String,
	userNum: Number,
	maxUserNum: Number,
	headOfTeam: String,
	createdDate: Date
});
var TodoRoom = mongoose.model("todoRoom", schema);

module.exports = TodoRoom;