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
          templateUrl: 'jobs/home.html',
          controller: 'JobsController as vm'
        })
        .state('jobs.list', {
          url: '/list',
          templateUrl: 'jobs/index.html',
          controller: 'JobsController as vm'
        })
        .state('jobs.create', {
          url: '/create',
          templateUrl: 'jobs/create.html',
          controller: 'JobsController as vm'
        })
        .state('jobs.edit', {
          url: '/edit',
          templateUrl: 'jobs/edit.html',
          controller: 'JobsController as vm'
        })
        .state('jobs.show', {
          url: '/:jobId',
          templateUrl: 'jobs/show.html',
          controller: 'JobsController as vm'
        })
        .state('jobs.show.checklists', {
          url: '/checklists',
          templateUrl: 'checklists/index.html',
          controller: 'ChecklistsController as vm'
        })
        .state('jobs.show.checklists.items', {
          url: '/items',
          templateUrl: 'items/index.html',
          controller: 'ItemsController as vm'
        });
      $urlRouterProvider.otherwise('/')
    })


}())
