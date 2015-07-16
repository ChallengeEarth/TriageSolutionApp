'use strict';

angular.module('myApp.languageChooser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/language-chooser-view', {
    templateUrl: 'language-chooser/language-chooser-view.html',
    controller: 'LanguageChooserCtrl'
  });
}])

.controller('LanguageChooserCtrl', ['$scope','Language',function($scope,Language) {
  $scope.languages = Language.query();
}]);