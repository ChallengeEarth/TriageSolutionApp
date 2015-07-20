'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers',
  'myApp.languageChooser',
  'myApp.questions',
  'myApp.questionsFinished',
  'myApp.version'
]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/language-chooser-view'});
}]);
