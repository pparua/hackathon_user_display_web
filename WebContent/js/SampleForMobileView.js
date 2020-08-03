var sampleApp = angular.module('sampleApp',["chart.js"]);

sampleApp.service("GridMapDetailsService",['$http', function ($http) {
    this.getGridMapDetailsGetService = function (location) {
	   if(location == "2002") {
		   return $http.get('https://<<CLOUD_FOUNDRY_ENDPOINT>>/getPlottedLayoutSnippets?location=2002&forDate=07-27-2020');
	   } else {
		   return $http.get('https://<<CLOUD_FOUNDRY_ENDPOINT>>/getPlottedLayoutSnippets?location=2003&forDate=07-27-2020');
	   }
    }
}]);

sampleApp.controller("sampleController", ['$scope', 'GridMapDetailsService', function ($scope,  GridMapDetailsService) {
	$scope.location = "2002";
	var startDateTimeLocal = new Date();
	$scope.startDateTime = (startDateTimeLocal.getMonth() < 10 ? '0' + (startDateTimeLocal.getMonth() + 1) : '-' + (startDateTimeLocal.getMonth() + 1)) + 
	 					   '-26' + 
	 					   "-" + startDateTimeLocal.getFullYear();
	$scope.endDateTime =   (startDateTimeLocal.getMonth() < 10 ? '0' + (startDateTimeLocal.getMonth() + 1) : '-' + (startDateTimeLocal.getMonth() + 1)) + 
	   					   '-27' + 
		                   "-" + startDateTimeLocal.getFullYear();
	$scope.submitUserDetails = function(){
		var crOneNb = 0;
		var crTwoNb = 0;
		var crThreeNb = 0;
		var selLocaion = $scope.location;
		$scope.firstImgName = "<<FLOOR_LAYOUT_IMAGE_URL_IN_IBM_CLOUD_OBJECT_STORE>>";
		if(selLocaion == "2002") {
			$scope.parentImgName = "https://<<CLOUD_FOUNDRY_ENDPOINT>>/GetPlottedLayout?location=2002&forDate=07-27-2020";
			crOneNb = 12;
			crTwoNb = 8;
			crThreeNb = 5;
		} else {
			$scope.parentImgName = "https://<<CLOUD_FOUNDRY_ENDPOINT>>/GetPlottedLayout?location=2003&forDate=07-27-2020";
			crOneNb = 2;
			crTwoNb = 0;
			crThreeNb = 1;
		}
		GridMapDetailsService.getGridMapDetailsGetService(selLocaion).then(function(response){
   	          var gridMapDetailsListTmp = response.data;
   	          $scope.gridMapDetailsList = [];
   	          for(var index = 0 ; index < 7 ; index++) {
 	  		     var obj = gridMapDetailsListTmp[index];
 	  		     $scope.gridMapDetailsList.push(obj);
 	  	      }
 	  	      $scope.pieChartMsg = "Summary";
 	          $scope.pieChartlabels = ["Without Mask", "Sneezing", "Gathering"];
 	          $scope.pieChartData = [crOneNb, crTwoNb, crThreeNb];
 	          $scope.pieChartColors = ["#00BFFF","#850101","#056608"];
   	  	}, function(error){
   	  		  // for any errors
   	  	});
	}
}]);
