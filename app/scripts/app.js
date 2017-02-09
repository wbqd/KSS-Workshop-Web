'use strict';

/**
 * @ngdoc overview
 * @name simWorkshop2017App
 * @description
 * # simWorkshop2017App
 *
 * Main module of the application.
 */
angular
  .module('simWorkshop2017App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/program', {
        templateUrl: 'views/program.html',
        controller: 'ProgramCtrl',
        controllerAs: 'program'
      })
      .when('/venue', {
        templateUrl: 'views/venue.html',
        controller: 'VenueCtrl',
        controllerAs: 'venue'
      })
      .when('/exhibits', {
        templateUrl: 'views/exhibits.html',
        controller: 'ExhibitsCtrl',
        controllerAs: 'exhibits'
      })
      .when('/paper', {
        templateUrl: 'views/paper.html',
        controller: 'PaperCtrl',
        controllerAs: 'paper'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
