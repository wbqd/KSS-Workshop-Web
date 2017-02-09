'use strict';

/**
 * @ngdoc function
 * @name simWorkshop2017App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the simWorkshop2017App
 */
angular.module('simWorkshop2017App')
  .controller('IndexCtrl', function ($scope, $mdSidenav, sideNavMenu, $location) {
    $scope.menu = sideNavMenu;

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.routeAndClose = function (menuId, url) {
      $mdSidenav(menuId).close();
      // $scope.toolbarTitle = title;
      $location.path(url);
    }
  });
