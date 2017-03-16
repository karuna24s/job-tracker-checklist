(function(){

  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
      })
      $stateProvider
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'jobs/jobs.html',
          controller: 'JobsController as vm'
      });
      $urlRouterProvider.otherwise('/')
    })


}())
