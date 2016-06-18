var mongoose = require('mongoose');
var db = require('../database/mongodb/db');
var Schema = mongoose.Schema;


var roomSchema = Schema({
	//todoRoomList 컬렉션 스키마 레퍼런스 선언
	name: String,
	userNum: Number,
	maxUserNum: Number,
	headOfTeam: String,
	createdDate: Date
});
var listschema = Schema({
	name: String,
	creator: String,
	timeLimit: Date,
	contents: String,
	todoRoom: {type: Schema.Types.ObjectId, ref: 'TodoRoom'} 
});

var TodoRoom = mongoose.model("TodoRoom", roomSchema);
var TodoList = mongoose.model("TodoList", listschema);

var todoRoomIns = new TodoRoom();
var todoListIns = new TodoList();


/*var TodoRoom = require('../database/mongodb/todoRoomList');
var TodoList = require('../database/mongodb/todoList');*/

module.exports = function(app) {

	app.get('/',function(req,res) {
		res.render('index');
	});
	app.get('/home',function(req,res) {
		res.render('personal-todo');
	});
	app.get('/homeTodo',function(req,res) {
		TodoRoom.find(function(err, data) {
			if(err) {
				console.log(err);
			}
			res.json(data);
		});
	});
	app.get('/detailTodo/:id', function(req,res) {
		res.render('todo-detail');
	})
	app.get('/detail/:id',function(req,res) {
		console.log('들옴');
		var id = req.params.id;
		TodoList.find({todoRoom: id},function(err,docs) {
			console.log(docs);
			if (err) {
				return err;
			}
			res.json(docs);
		});
	});
	app.get('/testAddRoom',function(req,res) {
		res.render('testMakeroom');
	});
	app.get('/detailTodo/:id/testAddList',function(req,res) {
		res.render('testMakeList');
	});


	app.post('/tryLogin',function(req,res) {
		//로그인 시도 후 home으로 리다이렉트
		res.redirect('/home');
	});
	app.post('/addList',function(req,res) {
		var body = req.body;
		todoListIns.name = body.name;
		todoListIns.creator = body.creator;
		todoListIns.timeLimit = body.timeLimit;
		todoListIns.contents = body.contents;
		todoListIns.todoRoom = body.r_id;

		todoListIns.save(function(err) {
			if(err) {
				console.log(err);
			}
			console.log('저장완룡');
			res.redirect('detailTodo/'+body.r_id);
		});

	});
	app.post('/addRoom',function(req,res) {
		var body = req.body;
		todoRoomIns.name = body.name;
		todoRoomIns.userNum = 1;
		todoRoomIns.maxUserNum = body.maxUserNum;
		todoRoomIns.headOfTeam = body.headOfTeam;
		todoRoomIns.createdDate = new Date();

		todoRoomIns.save(function(err) {
			if(err) {
				console.log(err);
			}
			console.log('저장 완료');
			res.redirect('home')
		})
	});
}