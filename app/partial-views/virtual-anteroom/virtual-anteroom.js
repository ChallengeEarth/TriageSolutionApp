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
    $scope.selectedPatient = null;

    $scope.deletePatient = function (patientToDelete) {
      patientToDelete.$remove({patientId:patientToDelete.Id});
      $scope.patients.splice($scope.patients.indexOf(patientToDelete),1);

      if(patientToDelete == $scope.selectedPatient) {
        $scope.selectedPatient = null;
      }
    };

    $scope.createNewPatient = function () {
      $scope.newPatient.$save();
      $scope.patients.push($scope.newPatient);
      $scope.newPatient = new Patient();
    };

    $scope.selectPatient = function (patientToSelect) {
      $scope.selectedPatient = patientToSelect;
      //this is a little helper-method, because the service returns the answered-questions as a hash (dictionary, map, whatever), but we need only the values.
      // This way, we get an array with only values.
      $scope.selectedPatient.getQuestionsWithAnswerValues = function () {
        var keys = Object.keys($scope.selectedPatient.QuestionsWithAnswer);
        return keys.map(function(v) { return $scope.selectedPatient.QuestionsWithAnswer[v]; });
      }
    };

    $scope.getSelectPatientPersonInformation = function () {
      if($scope.selectedPatient != null){
        return 'von Patient ' + $scope.selectedPatient.Name + ', Alter: ' + $scope.selectedPatient.Age + ' Hauptbeschwerde: ' + $scope.selectedPatient.ChiefComplaint;
      }
    }


  }]);

