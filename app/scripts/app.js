'use strict';

/**
 * @ngdoc overview
 * @name plantsAppApp
 * @description
 * # plantsAppApp
 *
 * Main module of the application.
 */
angular
  .module('plantsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl',
        controllerAs: 'cards'
      })
      .when('/plant/:plantId', {
        templateUrl: 'views/plant.html',
        controller: 'PlantCtrl',
        controllerAs: 'plant'
      })
      .otherwise({
        redirectTo: '/'
      });

  });