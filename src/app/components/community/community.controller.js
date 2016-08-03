(function (){
  'use strict';

  angular
    .module('vr3io')
    .controller('CommunityController', CommunityController);

    function CommunityController($log){
    //Community Controller (Blog, Partners, MXVR, CapitalVR, Press)
    var vm = this;

    vm.getCommunityInfo = function(){
      $log.debug('info@mxvr.co');
    };

    vm.getCommunityInfo();
  }
})();
