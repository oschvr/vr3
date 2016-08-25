(function () {
  'use strict';

  angular
    .module('vr3io')
    .service('servicesService', servicesService);

    function servicesService(){

      //Create some other shit to manage upcoming events from database !
      //Has to be a HTTP request that uses a python o php script to query a db, or use Backend
      //Inject here !!!
      //
      //FIELDS name, excerpt, startDate, endDate, venue, location, url, image, video, tickets_url
      //

      var data = [
        {
          'nameES': 'Transmisiones en Vivo',
          'nameEN': 'Live Streaming',
          'descES': '',
          'descEN': '',
          'url': '#/services/live',
          'image': '../../assets/images/services/LIVESTREAMING.png',
          'slide_id': 'service0'
        },
        {
          'nameES': 'Video En Demanda',
          'nameEN': 'Video On Demand',
          'descES': '',
          'descEN': '',
          'url': '#/services/live',
          'image': '../../assets/images/services/VOD.png',
          'slide_id': 'service1'
        },
        {
          'nameES': 'Reproductores Web y Móviles',
          'nameEN': 'Web and Mobile Players',
          'descES': '',
          'descEN': '',
          'url': '#/services/live',
          'image': '../../assets/images/services/PLAYERS.png',
          'slide_id': 'service2'
        },
        {
          'nameES': 'Subscripciones y PPE',
          'nameEN': 'Subscriptions and Pay Per View',
          'descES': '',
          'descEN': '',
          'url': '#/services/live',
          'image': '../../assets/images/services/CC.png',
          'slide_id': 'service3'
        },
        {
          'nameES': 'OTT y VR/360º',
          'nameEN': 'OTT and VR/360º',
          'descES': '',
          'descEN': '',
          'url': '#/services/live',
          'image': '../../assets/images/services/OTTVR.png',
          'slide_id': 'service4'
        },
        {
          'nameES': 'Experiencias RV y RA',
          'nameEN': 'VR and AR Experiences',
          'descES': '',
          'descEN': '',
          'url': '#/services/live',
          'image': '../../assets/images/services/VRAR.png',
          'slide_id': 'service5'
        }
      ];

      this.getServices = getServices;

      function getServices(){
        return data;
      }
    }
})();
