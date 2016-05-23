myApp.controller('todoList',function($scope) {
	$scope.listData = [
		{
			id: 1,
			name: 'ㅇㅇㅇ 사가기',
			timeLimit: '2016-05-10',
			creator: '나',
			contents: 'g알마람ㅇ라ㅏㅁ아람ㅇ라ㅏ마 ㄹ마아람',
			status: false
		},
		{
			id: 2,
			name: 'ㅇㅇㅇ 사가기',
			timeLimit: '2016-05-20',
			creator: '나',
			contents: 'g알마람ㅇ라ㅏㅁ아람ㅇ라ㅏ마 ㄹ마아람',
			status: false
		}
	]

	$scope.switchControl = function(t) {
		this.todoList.staus = !this.todoList.status
	}
});
