angular.module('myApp').service('mainService', function($http)  {

  this.getPerson = function(person)   {
    return $http ({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=3'
    })

    .then(function(result)  {
      console.log(result.data.results)
      return result.data.results
    })
  }
});
