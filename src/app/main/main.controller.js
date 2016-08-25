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
      dots: false,
      autoplay: true, //Set to TRUE on production
      initialSlide: 0,
      infinite: true,
      autoplaySpeed: 8500,
      method: {}
    };

    //Clients Slider Section (Using Angular Slick Carousel)
     self.clientsNumber = [
    {
      id: 0,
      img: "../assets/images/clients/3m.png"
    },
    {
      id: 1,
      img:"../assets/images/clients/coca.png"
    },
    {
      id: 2,
      img:"../assets/images/clients/indio.png"
    },
    {
      id: 3,
      img:"../assets/images/clients/modelo.png"
    },
    {
      id: 4,
      img:"../assets/images/clients/scotch.png"
    },
    {
      id: 5,
      img:"../assets/images/clients/sony.png"
    },
    {
      id: 6,
      img:"../assets/images/clients/warner.png"
    }];
    
    self.clientsConfigLoaded = true;
    self.clientsSlidesLoaded = true;
    self.clientsCurrentIndex = 0;
    self.clientsConfig = {
      dots: false,
      autoplay: true, //Set to TRUE on production
      initialSlide: 0,
      infinite: true,
      autoplaySpeed: 7000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ],
      method: {}
    };

    //Contact Section
    self.contactUrl = 'http://vr3.io/php/contact.php';

    //reCAPTCHA
    self.recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify'

    self.subjectList = {
      0: 'Streaming y Transmisiones en Vivo',
      1: 'Sistema de Subscripciones y PPE',
      2: 'Experiencias de VR y AR',
      3: 'Desarrollo de Software',
      4: 'Otro'
    };

    self.submit = function(form){
      //Trigger validation
      self.submitted = true;

      //In form invalid, return
      if(form.$invalid){
        return;
      } 

      var config = {
        'name': self.name, 
        'email': self.email, 
        'subject': self.subject, 
        'comments': self.comments
      };

      //HTTP Request

      $http.post(self.contactUrl, config)
        .success(function(data, status){

          $log.debug(config);

          if(data.status == 'OK'){
            self.name = null;
            self.email = null;
            self.subjectlist = null;
            self.comments = null;
            self.message = "Mensaje enviado. Gracias por contactarnos.";
          } else {

            $log(config);

            self.message = "Error procesando mensaje, vuelve a intentar.";
            $log.error(data);
          }
        }).error(function(data, status, headers){

          $log.debug(config);

          self.progress = data;
          self.message = "Hubo un error en la red. Intena más tarde"
          $log.error(data);
        }).finally(function(){
          //Esconder los mensajes despues de 3 seg
          $timeout(function(){
            self.message = null;
          }, 3000);
        });

    }

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
