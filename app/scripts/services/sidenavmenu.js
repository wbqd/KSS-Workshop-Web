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
      url: '/',
      title: 'Home',
      icon: 'dashboard'
    }
    ,{
      url: '/program',
      title: 'Program',
      icon: 'event'
    }
    ,{
      url: '/exhibits',
      title: 'Exhibits',
      icon: 'local_activity'
    }
  ]);
