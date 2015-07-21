'use strict';

angular.module('myApp.virtualAnteroom', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/virtual-anteroom', {
      templateUrl: 'partial-views/virtual-anteroom/virtual-anteroom-view.html',
      controller: 'VirtualAnteroomCtrl'
    });
  }])
  .controller('VirtualAnteroomCtrl',['$scope','Patient', function ($scope, Patient) {
    $scope.patients = Patient.query();
    $scope.newPatient = new Patient();

    $scope.deletePatient = function (patientToDelete) {
      patientToDelete.$remove({patientId:patientToDelete.Id});
      $scope.patients.splice($scope.patients.indexOf(patientToDelete),1);
    };

    $scope.createNewPatient = function () {
      $scope.newPatient.$save();
      $scope.patients.push($scope.newPatient);
      $scope.newPatient = new Patient();
    };
  }]);

