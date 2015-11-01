'use strict';

/**
 * @ngdoc function
 * @name plantsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plantsApp
 */
angular.module('plantsApp')
  .controller('MainCtrl', function ($scope, $location) {

  $scope.isActive = function (viewLocation) {
       var active = (viewLocation === $location.path());
       return active;
  };

  });
