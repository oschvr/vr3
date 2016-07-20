(function (){
  'use strict';

  angular
    .module('vr3io')
    .controller('ServicesController', ServicesController);

    function ServicesController($log){
      //Services Controller(Shop, VR, AR, Apps, Webapps)
      var vm = this;

      vm.getServices = function(){
        $log.debug('Shop, VR, AR, Apps, Webapps');
      };

      vm.getServices();
    }
})();
