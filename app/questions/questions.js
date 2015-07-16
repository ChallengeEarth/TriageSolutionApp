'use strict';

angular.module('myApp.questions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions-view', {
    templateUrl: 'questions/questions-view.html',
    controller: 'QuestionsCtrl'
  });
}])

.controller('QuestionsCtrl', [function() {

}]);