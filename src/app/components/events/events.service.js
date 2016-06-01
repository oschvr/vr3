(function () {
  'use strict';

  angular
    .module('vr3io')
    .service('eventsService', eventsService);

    function eventsService(){

      //Create some other shit to manage upcoming events from database !
      //Has to be a HTTP request that uses a python o php script to query a db, or use Backend
      //Inject here !!!
      //
      //FIELDS name, excerpt, startDate, endDate, venue, location, url, image, video, tickets_url
      //

      var data = [
        //Example data
        {
          'name': 'VR3 @ Campus Party 7',
          'excerpt': 'Presentación + Taller de VR en el Campus Party',
          'url': 'http://mexico.campus-party.org/2016/noticias',
          'image': '../assets/images/events/cpmx7.png',
          'tickets_url': 'http://mexico.campus-party.org/participa',
          'startDate': '1/Jul/2016',   //Date().toJSON()
          'endDate': '3/Jul/2016',     //Date().toJSON()
          'venue': 'Campus Party',
          'lat': '20.659965',
          'lon': '103.349149' //geopos (lat,long)

        },
        {
          'name': 'VR3 @ TagCDMX',
          'excerpt': 'Presentación + Taller de VR en TagCDMX, Sorpresas y Regalos.',
          'url': 'http://tagfestival.com/',
          'image': '../assets/images/events/tagcdmx.png',
          'tickets_url': 'http://tagfestival.com/voluntarios/',
          'startDate': '29/Jun/2016',   //Date().toJSON()
          'endDate': '30/Jun/2016',     //Date().toJSON()
          'venue': 'Campus Party',
          'lat': '20.659965',
          'lon': '103.349149' //geopos (lat,long)

        }
      ];

      this.getEvents = getEvents;

      function getEvents(){
        return data;
      }
    }
})();
