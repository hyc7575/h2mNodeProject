myApp.controller('todoList',function($scope, $http) {
	
	$scope.r_id = location.pathname.split('/').reverse()[0];


	$scope.listChk = function(t) {
		$http.put('/listChk', {chk: true, _id: t.todoList._id})
		callData();
	}
	
	$scope.switchControl = function(t) {
		this.todoList.staus = !this.todoList.status
	}

	function callData() {
		$http.get('/detail/'+$scope.r_id).then(function(res) {
			$scope.listData =res.data;
		});
	}

	callData();
});