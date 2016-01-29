'use strict';

/**
 * @ngdoc overview
 * @name ninjagoApp
 * @description
 * # ninjagoApp
 *
 * Main module of the application.
 */
angular
  .module('ninjagoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/characters', {
        templateUrl: 'views/characters.html',
        controller: 'charactersCtrl'
      })
      .when('/characters/about/:itemId', {
        templateUrl: 'views/about.html',
        controller: 'charactersCtrl'
      })
         .when('/episodes', {
        templateUrl: 'views/episodes.html',
        controller: 'episodesCtrl'
      })
        .when('/loc', {
        templateUrl: 'views/loc.html',
        controller: 'locCtrl'
      })
        .when('/tmnt1', {
        templateUrl: 'views/tmnt1.html',
        controller: 'tmnt1Ctrl'
      })
        .when('/tmnt2', {
        templateUrl: 'views/tmnt2.html',
        controller: 'tmnt2Ctrl'
      })
         .when('/tmnt3', {
        templateUrl: 'views/tmnt3.html',
        controller: 'tmnt3Ctrl'
      })
         .when('/osy', {
        templateUrl: 'views/osy.html',
        controller: 'osyCtrl'
      })
           .when('/age', {
        templateUrl: 'views/age.html',
        controller: 'ageCtrl'
      })
         .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'mapCtrl'
      })
          .when('/swt', {
        templateUrl: 'views/sw.html',
        controller: 'swtCtrl'
      })
          .when('/swl', {
        templateUrl: 'views/swl.html',
        controller: 'swlCtrl'
      })
           .when('/cw', {
        templateUrl: 'views/cw.html',
        controller: 'cwCtrl'
      })
           .when('/tata', {
        templateUrl: 'views/tata.html',
        controller: 'tataCtrl'
      })
           .when('/planets', {
        templateUrl: 'views/planets.html',
        controller: 'planetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
