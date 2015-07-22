'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.filters',
  'myApp.languageChooser',
  'myApp.questions',
  'myApp.questionsFinished',
  'myApp.virtualAnteroom',
  'myApp.version',
  'chieffancypants.loadingBar',
  'ngAnimate'
]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/language-chooser-view'});
}]);
