'use strict';

angular.module('myApp.virtualAnteroom', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/virtual-anteroom', {
      templateUrl: 'partial-views/virtual-anteroom/virtual-anteroom-view.html',
      controller: 'VirtualAnteroomCtrl'
    });
  }])
  .controller('VirtualAnteroomCtrl','Patient' ['$scope', function ($scope, Patient) {

  }]);

