(function() {
  'use strict';

  angular
    .module('vr3io')
    .directive('classicNavbar', classicNavbar);

  /** @ngInject */
  function classicNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/classicNavbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
    }
  }

})();
