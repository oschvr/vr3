(function () {
  'use strict';

  angular
    .module('vr3io')
    .service('workService', workService);


    function workService(){

      //Create some shit to consult work done from a database !
      //Has to be a HTTP request that uses a python o php script to query a db, or use Backend
      //Inject here !!!
      ////FIELDS title,client,url,video,image,description,ios_url,android_url
      //
      var data = [
        //Example data
        {
          'title': 'Corona360',
          'client': 'Grupo Modelo / AB InBev',
          'url': '',
          'video': 'https://www.youtube.com/watch?v=xy3SfRKVOFE',
          'image': '../assets/images/works/corona360.png',
          'description': 'Experiencia de VR para iOS / Android',
          'promo': 'Vive increíbles experiencias en Realidad Virtual a través de tu smartphone. Disponible para iOS y Android.',
          'ios_url': 'http://apple.co/24783ia',
          'android_url': 'http://bit.ly/24788lG'
        }
      ];

      this.getWork = getWork;

      function getWork(){
        return data;
      }
    }
})();
