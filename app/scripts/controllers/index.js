'use strict';

/**
 * @ngdoc function
 * @name simWorkshop2017App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the simWorkshop2017App
 */
angular.module('simWorkshop2017App')
  .controller('IndexCtrl', function ($scope, $mdSidenav, sideNavMenu) {
    $scope.menu = sideNavMenu;

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
  });
