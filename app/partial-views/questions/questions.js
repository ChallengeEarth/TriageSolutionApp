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
    $scope.currentProgress = Progress.get({patientId:SettingService.getCurrentPatient().Id});

    $scope.answerQuestionAndGetNextOne = function(choosenAnswer,questionId){
      //We need to create a new Answer-Object, because the choosenAnswer-object is not of type Answer and therefore unknown as resource
      //See: http://stackoverflow.com/questions/17294413/initializing-an-angular-resource-object-instance-without-calling-the-server
      var answer = new Answer({Id:choosenAnswer.Id});

      answer.$answerQuestion({patientId:SettingService.getCurrentPatient().Id,questionId:questionId}, function () {
        //Load the current progress after we have answered the question
        $scope.currentProgress = Progress.get({patientId:SettingService.getCurrentPatient().Id});
      });

      if(choosenAnswer.FollowingQuestionId != '00000000-0000-0000-0000-000000000000') {
        $scope.currentQuestion = Question.get({questionId:choosenAnswer.FollowingQuestionId});
      } else {
        $location.path('question-finished-view');
      }
    };

  }]);