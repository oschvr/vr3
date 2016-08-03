(function() {
  'use strict';

  angular
    .module('vr3io')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('VR3.io, VR Livestreaming. Latest version: 0.2.0; Follow us at @vr3io');
  }

})();
