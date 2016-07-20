(function() {
  'use strict';

  angular
    .module('vr3io')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $location, $http, $sce, $anchorScroll, $log, toastr, workService, eventsService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.works = [];
    vm.events = [];

    vm.gotoCompany = gotoCompany;
    vm.gotoTop = gotoTop;
    vm.gotoWork = gotoWork;
    vm.gotoContact = gotoContact;
    vm.gotoEvents = gotoEvents;

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
    function gotoEvents(){
      $location.hash('page-events');
      $anchorScroll();
    }

    function activate() {
      getWork();
      getEvents();
    }

    vm.contactUrl = 'app/php/contact.php';

    vm.formSubmit = function (isValid) {
       if(isValid){
        $http.post(vm.contactUrl, {'name': vm.name, 'email': vm.email, 'message': vm.message})
        .success(function (data, status) {
           vm.status = status;
           vm.data = data;
           vm.result = data;
        })
       } else{
        alert('Form invalid');
       }
    }

    //iframe Source Trust as Resource
    vm.trustSrc = function(src){
      return $sce.trustAsResourceUrl(src);
    }

    //Get all work done by VR3 from the workService to display in SPA
    function getWork(){
      vm.works = workService.getWork();
    }

    //Get all the events from the eventService to display in SPA
    function getEvents(){
      vm.events = eventsService.getEvents();
    }
  }
})();
