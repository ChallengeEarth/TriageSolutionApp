'use strict';

var triageSolutionServices = angular.module('myApp.services', ['ngResource']);

triageSolutionServices.factory('Language', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/languages', {}, {});
  }]);

triageSolutionServices.factory('Question', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/questions/:questionId', {},
      {
        getFirstQuestion : {method:'GET',params:{questionId:'first'}}
      });
  }]);

triageSolutionServices.factory('Patient', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/patients/:patientId', {},
      {
        getLatestPatient : {method:'GET',params:{patientId:'latest'}}
      });
  }]);

triageSolutionServices.factory('Answer', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/patients/:patientId/questions/:questionId/answer', {},
      {
        answerQuestion : {method:'POST'}
      });
  }]);

triageSolutionServices.factory('SpecialMessage', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/special-messages/:messageId', {},
      {
        getQuestionsFinished : { method:'GET',params:{messageId:'all-questions-answered'}}
      });
  }]);

triageSolutionServices.factory('Progress', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/patients/:patientId/progress', {}, {});
  }]);



triageSolutionServices.factory('SettingService',
  function(){
    var settingService = {};

    var choosenLanguage = {};
    var currentPatient = {};

    settingService.setLanguage = function (newLanguage) {
      choosenLanguage = newLanguage;
    };

    settingService.getLanguage = function () {
      return choosenLanguage;
    };

    settingService.setCurrentPatient = function (patient) {
      currentPatient = patient;
    };

    settingService.getCurrentPatient = function () {
      return currentPatient;
    };

    return settingService;
  });