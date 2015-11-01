'use strict';

/**
 * @ngdoc function
 * @name plantsApp.controller:PlantCtrl
 * @description
 * # PlantCtrl
 * Controller of the plantsApp
 */
angular.module('plantsApp')
    .controller('PlantCtrl', function ($scope, $location, $routeParams, $http) {

        $scope.plantId = $routeParams.plantId;
        $scope.prevId = parseInt($routeParams.plantId) - 1;
        $scope.nextId = parseInt($routeParams.plantId) + 1;

        $http.get('plants/PlantsData.json').success(function (data) {
            $scope.plant = data;
        });

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

    });
