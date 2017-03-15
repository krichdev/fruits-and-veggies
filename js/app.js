var app = angular.module("FruitsAndVeggies", []);

app.controller("ListCtrl", ["$scope", function($scope){
  var combined = fruits.concat(vegetables);
  $scope.fullList = combined.sort(function(a, b){return 0.5 - Math.random()});
  $scope.newFruits = [];
  $scope.newVeggies = [];

  $scope.moveLeft = function(){
    $scope.fullList.splice(this.$index, 1);
    $scope.newFruits.push(this.item);

    if(fruits.includes(this.item)){
      console.log(this.item, "is a fruit")
    }else {
      console.log(this.item, "is not a fruit")
    }

  }

  $scope.moveRight = function(){
    $scope.fullList.splice(this.$index, 1);
    $scope.newVeggies.push(this.item);

    if(vegetables.includes(this.item)){
      console.log(this.item, "is a vegetable")
    } else {
      console.log(this.item, "is not a vegetable")
    }
  }

  $scope.combineRight = function(){
    $scope.newFruits.splice(this.$index, 1);
    $scope.fullList.push(this.item);
  }

  $scope.combineLeft = function(){
    $scope.newVeggies.splice(this.$index, 1);
    $scope.fullList.push(this.item);
  }


}]);
