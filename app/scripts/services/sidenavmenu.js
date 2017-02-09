'use strict';

/**
 * @ngdoc service
 * @name simWorkshop2017App.sideNavMenu
 * @description
 * # sideNavMenu
 * Constant in the simWorkshop2017App.
 */
angular.module('simWorkshop2017App')
  .constant('sideNavMenu', [
    {
      url: '#home',
      title: 'Home',
      icon: 'home'
    },
    {
      url: '#schedule',
      title: 'Schedule',
      icon: 'date_range'
    },
    {
      url: '#notice',
      title: 'Notice',
      icon: 'announcement'
    }
  ]);
