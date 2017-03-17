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
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'jobs/index.html',
          controller: 'JobsController as vm'
        })
        .state('create', {
          url: '/jobs/create',
          templateUrl: 'jobs/create.html',
          controller: 'JobsController as vm'
        });
      $urlRouterProvider.otherwise('/')
    })


}())
