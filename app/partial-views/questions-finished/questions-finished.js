'use strict';

angular.module('myApp.questionsFinished', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/question-finished-view', {
      templateUrl: 'partial-views/questions-finished/questions-finished-view.html',
      controller: 'QuestionsFinishedCtrl'
    });
  }])
  .controller('QuestionsFinishedCtrl', ['$scope', 'SpecialMessage', function ($scope, SpecialMessage) {
    $scope.questionsFinishedMessage = SpecialMessage.getQuestionsFinished();
  }]);

