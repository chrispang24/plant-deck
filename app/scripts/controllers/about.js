'use strict';

/**
 * @ngdoc function
 * @name plantsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the plantsApp
 */
angular.module('plantsApp')
  .controller('AboutCtrl', function ($scope, $location) {

  $scope.isActive = function (viewLocation) {
       var active = (viewLocation === $location.path());
       return active;
  };

  });
