var mongoose = require('mongoose');
var db = require('../database/mongodb/db');
var TodoRoom = require('../database/mongodb/todoRoomList');

module.exports = function(app) {

	var todoRoom = new TodoRoom();
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
	app.get('/testAddRoom',function(req,res) {
		res.render('testMakeroom');
	});


	app.post('/tryLogin',function(req,res) {
		//로그인 시도 후 home으로 리다이렉트
		res.redirect('/home');
	});

	app.post('/addRoom',function(req,res) {
		var body = req.body;
		todoRoom.name = body.name;
		todoRoom.userNum = 1;
		todoRoom.maxUserNum = body.maxUserNum;
		todoRoom.headOfTeam = body.headOfTeam;
		todoRoom.createdDate = new Date();

		todoRoom.save(function(err) {
			if(err) {
				console.log(err);
			}
			console.log('저장 완료');
			res.redirect('home')
		})
	});
}