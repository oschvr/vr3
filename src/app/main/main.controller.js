(function() {
  'use strict';

  angular
    .module('vr3io')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $location, $http, $sce, $anchorScroll, $log, toastr, workService, eventsService) {
    var vm = this;

    activate();

    //MainVR Section
    vm.landingVRUrl = '#/mainvr';
    vm.landingIFrame = $sce.trustAsResourceUrl(vm.landingVRUrl);

    //Landing Section (Using Angular Slick Carousel)

    vm.sliderNumber = [
    {
      id: 0,
      labelES: "Transmisiones 360º/VR en Vivo",
      labelEN: "Live Streaming in 360º/VR",
      url: "http://vr3.io",
      img: "../../assets/images/vrhmd.png",
      id_html:"slide0"
    },
    {
      id: 1,
      labelES: "Encoding de Video Bajo Demanda",
      labelEN: "Video On Demand Encoding",
      url: "http://vr3.io",
      id_html:"slide1"
    },
    {
      id: 2,
      labelES: "Para iOS/Android, PC/Mac, OTT/TV, GearVR/Cardboard",
      labelEN: "For iOS/Android, PC/Mac, OTT/TV, GearVR/Cardboard",
      url: "http://vr3.io",
      id_html:"slide2"
    },
    {
      id: 3,
      labelES: "Reproductores web 360º/VR",
      labelEN: "360º/VR Web-based players",
      url: "http://vr3.io",
      id_html:"slide3"
    },
    {
      id: 4,
      labelES: "Experiencias en VR/AR",
      labelEN: "VR/AR Experiencies",
      url: "http://vr3.io",
      id_html:"slide4"
    }];
    
    vm.sliderSlidesLoaded = true;
    vm.sliderConfigLoaded = true;
    vm.sliderCurrentIndex = 0;
    vm.sliderConfig = {
      dots: true,
      autoplay: true,
      initialSlide: 0,
      infinite: true,
      autoplaySpeed: 8500,
      method: {},
      event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          //console.log('before change', Math.floor((Math.random() * 10) + 100));
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
          $scope.slickCurrentIndex = currentSlide;
        },
        breakpoint: function (event, slick, breakpoint) {
          console.log('breakpoint');
        },
        destroy: function (event, slick) {
          console.log('destroy');
        },
        edge: function (event, slick, direction) {
          console.log('edge');
        },
        reInit: function (event, slick) {
          console.log('re-init');
        },
        init: function (event, slick) {
          console.log('init');
        },
        setPosition: function (event, slick) {
          //console.log('setPosition');
        },
        swipe: function (event, slick, direction) {
          console.log('swipe');
        }
      }
    }

    //Scroll Section

    vm.gotoCompany = gotoCompany;
    vm.gotoTop = gotoTop;
    vm.gotoWork = gotoWork;
    vm.gotoContact = gotoContact;
    vm.gotoEvents = gotoEvents;

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



    //Contact Section

    vm.contactUrl = '../php/contact.php';

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
    vm.works = [];
    function getWork(){
      vm.works = workService.getWork();
    }

    //Get all the events from the eventService to display in SPA
    vm.events = [];
    function getEvents(){
      vm.events = eventsService.getEvents();
    }

  }
})();
