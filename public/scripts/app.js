'use strict';

var config = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl' // -->mao ning controller pra dra ang mga code nmu sa mga button na ng-click ug pag save
        })
        .state('employees', {
            url: '/main/employees',
            templateUrl: 'templates/employee.html',
            controller:'employeectrl'
        })
        .state('position', {
        	url:'/main/position',
        	templateUrl:'templates/position.html'
        })
        .state('branch', {
            url:'/main/branch',
            templateUrl:'templates/branch.html',
            controller:'branchctrl'
        })
        .state('checkDisbursement', {
            url:'/main/checkDisbursement',
            templateUrl:'templates/checkDisbursement.html',
            controller:'cdvctrl'

        });
        
    $urlRouterProvider.otherwise('/main');
    $locationProvider.html5Mode(true);
};


angular.module('accounting', ['ngResource','ngSanitize','ui.router','ui.bootstrap','ngAnimate','toastr','ngDialog','ngTable'
    ])
    .config(config);