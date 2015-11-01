'use strict';

/**
 * @ngdoc function
 * @name plantsApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the plantsApp
 */
angular.module('plantsApp')
  .controller('CardsCtrl', function ($scope, $http, $location) {

  $http.get('plants/PlantsData.json').success(function(data) {
    $scope.plants = data;
  });

  $scope.orderProp = 'NAME';

  $scope.sortPlants = function(plant) {
    $scope.orderProp = plant;
  };

  $scope.showPlant = function(plant) {
    $location.path('plant/' + plant.ID);
  };

  $scope.isActive = function (viewLocation) {
       var active = (viewLocation === $location.path());
       return active;
  };

  });


