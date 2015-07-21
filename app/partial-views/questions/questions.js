'use strict';

angular.module('myApp.questions', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/questions-view', {
      templateUrl: 'partial-views/questions/questions-view.html',
      controller: 'QuestionsCtrl'
    });
  }])
  .controller('QuestionsCtrl', ['$scope','$location', 'SettingService','Question','Answer','Progress', function ($scope,$location,SettingService,Question,Answer,Progress) {
    $scope.currentQuestion = Question.getFirstQuestion();
    $scope.currentProgress = Progress.get({patientId:'422af451-2c5a-4ff5-9690-2a595d856ce5'});

    $scope.answerQuestionAndGetNextOne = function(choosenAnswer,questionId){
      //We need to create a new Answer-Object, because the choosenAnswer-object is not of type Answer and therefore unknown as resource
      //See: http://stackoverflow.com/questions/17294413/initializing-an-angular-resource-object-instance-without-calling-the-server
      var answer = new Answer({Id:choosenAnswer.Id});

      //TODO: currently a dummy patient-id, replace it with real one.
      answer.$answerQuestion({patientId:'422af451-2c5a-4ff5-9690-2a595d856ce5',questionId:questionId});

      if(choosenAnswer.FollowingQuestionId != '00000000-0000-0000-0000-000000000000') {
        $scope.currentQuestion = Question.get({questionId:choosenAnswer.FollowingQuestionId});
        $scope.currentProgress = Progress.get({patientId:'422af451-2c5a-4ff5-9690-2a595d856ce5'});
      } else {
        $location.path('question-finished-view');
      }
    };

  }]);