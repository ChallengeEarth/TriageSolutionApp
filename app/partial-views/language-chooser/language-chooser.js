'use strict';

angular.module('myApp.languageChooser', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/language-chooser-view', {
      templateUrl: 'partial-views/language-chooser/language-chooser-view.html',
      controller: 'LanguageChooserCtrl'
    });
  }])
  .controller('LanguageChooserCtrl', ['$scope', 'SettingService', 'Patient', 'Language', function ($scope, SettingService,Patient, Language) {

    $scope.currentPatient = Patient.getLatestPatient();
    SettingService.setCurrentPatient($scope.currentPatient);

    //transfer methods from the SettingService to this controller. What we aim for is to share the choosen-language over multiple controllers, so we store it in the SettingService-Service
    $scope.getLanguage = SettingService.getLanguage;
    $scope.setLanguage = SettingService.setLanguage;

    $scope.languages = Language.query();
  }]);

