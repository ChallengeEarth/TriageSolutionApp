/**
 * Created by ursinbrunner on 16/07/15.
 */
var triageSolutionFilters = angular.module('myApp.filters', []);

triageSolutionFilters.filter('progressPercentage',['$filter',function($filter) {
  return function(progressObject) {
    if (typeof progressObject != "undefined") {
      //use the given filter 'number' to avoid fractions after calculation
      return $filter('number')(100 / progressObject.TotalQuestions * progressObject.QuestionsAnswered,0) + '%';
    } else {
      return '0%';
    }
  };
}]);