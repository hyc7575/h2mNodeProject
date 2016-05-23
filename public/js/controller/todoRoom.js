myApp.controller('todoRoom',function($scope,$http) {
	//todoRoomList 라는 컬렉션
	$http.get('/homeTodo').then(function(res) {
		console.log(res.data);
		$scope.listData =res.data;
	});
});