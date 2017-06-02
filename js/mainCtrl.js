angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

  // $scope.test = "Hello! I'm working!"

    mainService.getPerson().then(function(result) {
      console.log(result)
      $scope.persons = result
    })

});
