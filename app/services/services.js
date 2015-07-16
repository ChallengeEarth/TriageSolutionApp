'use strict';

var triageSolutionServices = angular.module('myApp.services', ['ngResource']);

triageSolutionServices.factory('Language', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/languages', {}, {});
  }]);

triageSolutionServices.factory('SettingService',
  function(){
    var choosenLanguage = {};
    var settingService = {};

    settingService.setLanguage = function (newLanguage) {
      choosenLanguage = newLanguage;
    };

    settingService.getLanguage = function () {
      return choosenLanguage;
    };

    return settingService;
  });