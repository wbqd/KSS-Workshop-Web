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
      url: '#!/home',
      title: 'Home',
      icon: 'home'
    },
    {
      url: '#!/registration',
      title: 'Registration',
      icon: 'date_range'
    },
    {
      url: '#!/paper',
      title: 'Paper Submission',
      icon: 'announcement'
    }
  ]);
