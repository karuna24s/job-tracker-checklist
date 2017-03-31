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
        .state('home.jobs', {
          url: '/jobs',
          templateUrl: 'jobs/home.html',
          controller: 'JobsController as vm'
        })
        .state('home.jobs.list', {
          url: '/list',
          templateUrl: 'jobs/index.html',
          controller: 'JobsController as vm'
        })
        .state('home.jobs.create', {
          url: '/create',
          templateUrl: 'jobs/create.html',
          controller: 'JobsController as vm'
        })
        .state('home.jobs.edit', {
          url: '/edit/:jobId',
          templateUrl: 'jobs/edit.html',
          controller: 'JobsController as vm'
        })
        .state('home.jobs.show', {
          url: '/show/:jobId',
          templateUrl: 'jobs/show.html',
          controller: 'JobsController as vm'
        })
        .state('home.jobs.show.checklists', {
          url: '/checklists',
          templateUrl: 'checklists/show.html',
          controller: 'ChecklistsController as vm'
        })
        .state('home.jobs.show.checklists.items', {
          url: '/items',
          templateUrl: 'items/show.html',
          controller: 'ItemsController as vm'
        });
      $urlRouterProvider.otherwise('/')
    })


}())
