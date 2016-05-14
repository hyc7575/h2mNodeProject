var myApp = angular.module('myApp',[]);
myApp.controller('todoList',function($scope) {
	$scope.listData = [
		{
			id: 1,
			name: 'ㅇㅇㅇ 사가기',
			timeLimit: '2016-05-20',
			creater: '나',
			contents: 'g알마람ㅇ라ㅏㅁ아람ㅇ라ㅏ마 ㄹ마아람'
		}
	]
});
myApp.controller('todoRoom',function($scope) {
	$scope.listData = [
		{
			id: 1,
			name: '세미나 준비',
			userNum: 2,
			maxUserNum: 8,
			headOfTeam: '내가방장이오',
			createdDate: '2016-05-13'
		},
		{
			id: 2,
			name: '2번방 의 선물',
			userNum: 4,
			maxUserNum: 8,
			headOfTeam: '아야어엶얼암',
			createdDate: '2016-02-17'
		},
		{
			id: 3,
			name: '내방이당!',
			userNum: 7,
			maxUserNum: 10,
			headOfTeam: '감기감기',
			createdDate: '2016-04-13'
		}

	]
});