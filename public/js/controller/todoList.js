myApp.controller('todoList',function($scope, $http) {
	var id = location.pathname.split('/').reverse()[0];

	$http.get('/detail/'+id).then(function(res) {
		console.log(res.data);
		$scope.listData =res.data;
	});

	
	$scope.switchControl = function(t) {
		this.todoList.staus = !this.todoList.status
	}
});
