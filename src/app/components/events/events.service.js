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
          'excerpt': 'Presencia de VR3, el startup de VR en Campus Party',
          'url': 'http://mexico.campus-party.org/2016/noticias',
          'image': '../assets/images/events/cpmx7.png',
          'tickets_url': 'http://mexico.campus-party.org/participa',
          'startDate': '1/Jul/2016',   //Date().toJSON()
          'endDate': '3/Jul/2016',     //Date().toJSON()
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
