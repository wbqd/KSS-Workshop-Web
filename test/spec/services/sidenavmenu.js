'use strict';

describe('Service: sideNavMenu', function () {

  // load the service's module
  beforeEach(module('simWorkshop2017App'));

  // instantiate service
  var sideNavMenu;
  beforeEach(inject(function (_sideNavMenu_) {
    sideNavMenu = _sideNavMenu_;
  }));

  it('should do something', function () {
    expect(!!sideNavMenu).toBe(true);
  });

});
