'use strict';

angular.module('myApp.questions', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/questions-view', {
      templateUrl: 'partial-views/questions/questions-view.html',
      controller: 'QuestionsCtrl'
    });
  }])
  .controller('QuestionsCtrl', ['$scope', 'SettingService', function ($scope, SettingService) {
    $scope.getLanguage = SettingService.getLanguage;
  }]);