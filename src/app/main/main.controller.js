(function() {
  'use strict';

  angular
    .module('vr3io')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $location, $http, $sce, $anchorScroll, $log, toastr, workService, eventsService, servicesService) {
    
    var self = this;

    function activate() {
      getWork();
      getEvents();
      getServices();
    }

    activate();

    //MainVR Section
    self.landingVRUrl = '#/mainvr';
    self.landingIFrame = $sce.trustAsResourceUrl(self.landingVRUrl);

    //Landing Section (Using Angular Slick Carousel)

    self.sliderNumber = [
    {
      id: 0,
      labelES: "Transmite a 1080/2K o 360º/VR en Vivo",
      labelEN: "Live Stream to 1080/2K or 360º/VR",
      url: "http://vr3.io",
      id_html:"slide0"
    },
    {
      id: 1,
      labelES: "Distribuye bajo demanda a cualquier destino",
      labelEN: "Video On Demand Encoding",
      url: "http://vr3.io",
      id_html:"slide1"
    },
    {
      id: 2,
      labelES: "Habilita Subscripciones o crea tu sistema de Pago-Por-Evento",
      labelEN: "100% Web-based Players, Native distribution",
      url: "http://vr3.io",
      id_html:"slide2"
    },
    {
      id: 3,
      labelES: "Crea experiencias únicas de Realidad Virtual/Aumentada",
      labelEN: "Unique Virtual Reality experiencies for your customers",
      url: "http://vr3.io",
      id_html:"slide3"
    }];
    
    self.sliderSlidesLoaded = true;
    self.sliderConfigLoaded = true;
    self.sliderCurrentIndex = 0;
    self.sliderConfig = {
      dots: true,
      autoplay: true, //Set to TRUE on production
      initialSlide: 0,
      infinite: true,
      autoplaySpeed: 8500,
      method: {},
      event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          //console.log('before change', Math.floor((Math.random() * 10) + 100));
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
          self.slickCurrentIndex = currentSlide;
        },
        breakpoint: function (event, slick, breakpoint) {
          //console.log('breakpoint');
        },
        destroy: function (event, slick) {
          //console.log('destroy');
        },
        edge: function (event, slick, direction) {
          //console.log('edge');
        },
        reInit: function (event, slick) {
          //console.log('re-init');
        },
        init: function (event, slick) {
          //console.log('init');
        },
        setPosition: function (event, slick) {
          //console.log('setPosition');
        },
        swipe: function (event, slick, direction) {
          //console.log('swipe');
        }
      }
    }

    //Contact Section

    self.contactUrl = '../php/contact.php';

    self.formSubmit = function (isValid) {
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
    self.trustSrc = function(src){
      return $sce.trustAsResourceUrl(src);
    }

    //Get all work done by VR3 from the workService to display in SPA

    function getWork(){
      //self.works = workService.getWork();
    }

    //Get all the events from the eventService to display in SPA

    function getEvents(){
      self.events = eventsService.getEvents();
    }

    //Get the company services
    
    function getServices(){
      self.services = servicesService.getServices();
      $log.debug(self.services);
    }
  }
})();
