(function() {
  'use strict';

  angular
    .module('vr3io')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
