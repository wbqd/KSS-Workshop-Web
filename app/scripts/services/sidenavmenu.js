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
      url: '/registration',
      title: 'Registration',
      icon: 'move_to_inbox'
    }
    ,{
      url: '/paper',
      title: 'Paper Submission',
      icon: 'send'
    }
    ,{
      url: '/program',
      title: 'Program',
      icon: 'event'
    }
    ,{
      url: '/venue',
      title: 'Venue',
      icon: 'map'
    }
    ,{
      url: '/exhibits',
      title: 'Exhibits',
      icon: 'local_activity'
    }
  ]);
