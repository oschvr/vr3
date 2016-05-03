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
        templateUrl: 'app/community/blog.html',
        controller: 'CommunityController',
        controllerAs: 'blog'
      })

      .state('partners',{
        url: '/partners',
        templateUrl: 'app/community/partners.html',
        controller: 'CommunityController',
        controllerAs: 'partners'
      })

      .state('press',{
        url: '/press',
        templateUrl: 'app/community/press.html',
        controller: 'CommunityController',
        controllerAs: 'press'
      })

      //--Soporte

      .state('problem',{
        url: '/problem',
        templateUrl: 'app/support/problem.html',
        controller: 'SupportController',
        controllerAs: 'support'
      })

      .state('docs', {
        url: '/docs',
        templateUrl: 'app/support/docs.html',
        controller: 'SupportController',
        controllerAs: 'support'
      })

      //--Servicios

      .state('vr', {
        url: '/vr',
        templateUrl: 'app/services/vr.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })

      .state('ar', {
        url: '/ar',
        templateUrl: 'app/services/ar.html',
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
        templateUrl: 'app/company/team.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/company/jobs.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('project', {
        url: '/project',
        templateUrl: 'app/company/project.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('tos', {
        url: '/tos',
        templateUrl: 'app/company/tos.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/company/privacy.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      })

      .state('karma', {
        url: '/karma',
        templateUrl: 'app/company/karma.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
