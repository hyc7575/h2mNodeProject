var mongoose = require('mongoose');
var schema = mongoose.Schema({
	room_id: String,
	name: String,
	creator: String,
	timeLimit: Date,
	contents: String,
	todoRoom: {type: Schema.Types.ObjectId, ref: 'TodoRoom'} 
});
var TodoList = mongoose.model("todoList", schema);



module.exports = TodoList;