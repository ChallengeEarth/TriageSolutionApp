'use strict';

var triageSolutionServices = angular.module('myApp.services', ['ngResource']);

triageSolutionServices.factory('Language', ['$resource',
  function($resource){
    return $resource('http://triagesolution.azurewebsites.net/api/languages', {}, {});
  }]);