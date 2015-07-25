 'use strict';

 angular.module('accounting')
     .controller('cdvctrl', function($scope, $filter, CDVFactory) {

         $scope.today = function() {
             $scope.dt = new Date();
         }
         $scope.today();

         $scope.clear = function() {
             $scope.dt = null;
         };

         // Disable weekend selection
         $scope.disabled = function(date, mode) {
             return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
         };

         $scope.toggleMin = function() {
             $scope.minDate = $scope.minDate ? null : new Date();
         };
         $scope.toggleMin();

         $scope.open = function($event) {
             $event.preventDefault();
             $event.stopPropagation();

             $scope.opened = true;
         };

         $scope.dateOptions = {
             formatYear: 'yy',
             startingDay: 1
         };

         $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
         $scope.format = $scope.formats[0];

         var tomorrow = new Date();
         tomorrow.setDate(tomorrow.getDate() + 1);
         var afterTomorrow = new Date();
         afterTomorrow.setDate(tomorrow.getDate() + 2);
         $scope.events = [{
             date: tomorrow,
             status: 'full'
         }, {
             date: afterTomorrow,
             status: 'partially'
         }];

         $scope.getDayClass = function(date, mode) {
             if (mode === 'day') {
                 var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                 for (var i = 0; i < $scope.events.length; i++) {
                     var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                     if (dayToCheck === currentDay) {
                         return $scope.events[i].status;
                     }
                 }
             }

             return '';
         };

         $scope.addRow = function() {
             $scope.inserted = {
                 id: $scope.users.length + 1,
                 name: '',
                 status: null,
                 group: null
             };
             $scope.users.push($scope.inserted);
         };

         function init() {
             $scope.CheckDisbursements = {};
             $scope.CDV = {};
             $scope.banks = {};
             $scope.accounts = {};
             $scope.acctTitles = {};

             CDVFactory.getBankName().then(function(data) {
                 $scope.banks = data;
             });

             CDVFactory.getAcctNum().then(function(data) {
                 $scope.accounts = data;
             });

             CDVFactory.getAcctTitle().then(function(data) {
                 $scope.acctTitles = data;
             });
         }

         init();
     });