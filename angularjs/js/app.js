angular.module('myApp', ['chart.js'])	//제작되는 모듈, [다른 모듈]
	.controller('TabCtrl', function($scope){
		//tab button set
		$scope.btnNames = [
			{btnName : "라인", stat: true},
			{btnName : "바", stat: false},
			{btnName : "도넛", stat: false},
			{btnName : "레이더", stat: false},
			{btnName : "폴라", stat: false}
		];

		//chart set
		$scope.datas =[
			[123,243,354,111,11,82,49],
			[122,444,123,166,423,555,11],
			[223,211,15,123,245,231,400]
		];
		$scope.data = [35,25,5,2,13,10,10];
		$scope.legend = true;
		$scope.series = ['A', 'B', 'C'];
		$scope.labels = ['월','화','수','목','금','토','일'];
		
		$scope.viewNum = 1;
		//tab button click
		$scope.toggle = function(i){
			for(k in $scope.btnNames){
				$scope.btnNames[k].stat = false;	
			}
			$scope.btnNames[i].stat = true;
		}
	})