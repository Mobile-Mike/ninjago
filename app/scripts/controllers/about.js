'use strict';

/**
 * @ngdoc function
 * @name ninjagoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ninjagoApp
 */
angular.module('ninjagoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
