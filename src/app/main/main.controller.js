(function() {
  'use strict';

  angular
    .module('vr3io')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $location, $anchorScroll, $log, webDevTec, toastr, workService, eventsService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.works = [];
    vm.events = [];

    vm.showToastr = showToastr;
    vm.gotoCompany = gotoCompany;
    vm.gotoTop = gotoTop;
    vm.gotoWork = gotoWork;
    vm.gotoContact = gotoContact;

    activate();

    //Scroll To using location and anchorScroll
    function gotoTop(){
      $location.hash('page-top');
      $anchorScroll();
    }
    function gotoWork(){
      $location.hash('page-work');
      $anchorScroll();
    }
    function gotoCompany(){
      $location.hash('page-company');
      $anchorScroll();
    }
    function gotoContact(){
      $location.hash('page-contact');
      $anchorScroll();
    }

    function activate() {
      getWebDevTec();
      getWork();
      getEvents();
    }

    //INTO THE TRASH FUCKER
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    //INTO THE OTHER TRASH BIN, FUCKER
    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    //Get all work done by VR3 from the workService to display in SPA
    function getWork(){
      vm.works = workService.getWork();
    }

    //Get all the events from the eventService to display in SPA
    function getEvents(){
      vm.events = eventsService.getEvents();
      console.log(vm.events);
    }
  }
})();
