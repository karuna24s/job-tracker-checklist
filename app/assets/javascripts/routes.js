(function(){

  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController as vm'
      })
      $stateProvider
        .state('home.jobs', {
          url: '/jobs',
          templateUrl: 'views/jobs.html',
          controller: 'JobsController as vm'
      });
      $urlRouterProvider.otherwise('/')
    })


}())
