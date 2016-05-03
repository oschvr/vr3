(function() {
  'use strict';

  angular
    .module('vr3io')
    .config(config);

  /** @ngInject */
  function config($logProvider, $sceDelegateProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //SCEDelegate Policy to allow resources (trusted) to be embeded
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://srv*.assets.example.com/**',
      'http://www.youtube.com/**',
      'http://www.youtu.be/**'
    ]);
  }

})();
