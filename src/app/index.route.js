(function() {
  'use strict';

  angular
    .module('vr3io')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      //FOOTER ROUTES (SITE MAP)
      //--Comunidad

      .state('blog',{
        url: '/blog',
        templateUrl: 'app/components/community/blog.html',
        controller: 'CommunityController',
        controllerAs: 'blog'
      })

      .state('partners',{
        url: '/partners',
        templateUrl: 'app/components/community/partners.html',
        controller: 'CommunityController',
        controllerAs: 'partners'
      })

      .state('press',{
        url: '/press',
        templateUrl: 'app/components/community/press.html',
        controller: 'CommunityController',
        controllerAs: 'press'
      })

      .state('workshop',{
        url: '/workshop',
        templateUrl: 'app/components/community/workshop.html',
        controller: 'CommunityController',
        controllerAs: 'press'
      })


      //--Soporte

      .state('support',{
        url: '/support',
        templateUrl: 'app/components/support/support.html',
        controller: 'SupportController',
        controllerAs: 'support'
      })

      .state('docs', {
        url: '/docs',
        templateUrl: 'app/components/support/docs.html',
        controller: 'SupportController',
        controllerAs: 'support'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'app/components/support/contact.html',
        controller: 'SupportController',
        controllerAs: 'support'
      })

      //--Servicios

      .state('vr', {
        url: '/vr',
        templateUrl: 'app/components/services/vr.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })

      .state('ar', {
        url: '/ar',
        templateUrl: 'app/components/services/ar.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })

      .state('apps', {
        url: '/apps',
        templateUrl: 'app/services/apps.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })

      .state('webapps', {
        url: '/webapps',
        templateUrl: 'app/services/webapps.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })

      //--Empresa

      .state('team', {
        url: '/team',
        templateUrl: 'app/components/company/team.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/components/company/jobs.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('project', {
        url: '/project',
        templateUrl: 'app/components/company/project.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('tos', {
        url: '/tos',
        templateUrl: 'app/components/company/tos.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/components/company/privacy.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('karma', {
        url: '/karma',
        templateUrl: 'app/components/company/karma.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
