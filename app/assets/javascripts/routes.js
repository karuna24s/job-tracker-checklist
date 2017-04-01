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
        .state('home.login', {
          url:'login',
          templateUrl: 'auth/login.html',
          controller: 'AuthController as vm',
          onEnter: function($state, Auth) {
            Auth.currentUser().then(function(){
                $state.go('home.jobs');
            });
          }
        })
        .state('home.register', {
          url:'register',
          templateUrl: 'auth/register.html',
          controller: 'AuthController as vm',
          onEnter: function($state, Auth) {
            Auth.currentUser().then(function(){
                $state.go('home.jobs');
            });
          }
        })
        .state('home.jobs', {
          url: 'jobs',
          templateUrl: 'jobs/index.html',
          controller: 'JobsController as vm'
        })
        // .state('home.jobs.list', {
        //   url: '/list',
        //   templateUrl: 'jobs/index.html',
        //   controller: 'JobsController as vm'
        // })
        .state('home.create', {
          url: 'create',
          templateUrl: 'jobs/create.html',
          controller: 'JobsController as vm'
        })
        .state('home.edit', {
          url: 'edit/:jobId',
          templateUrl: 'jobs/edit.html',
          controller: 'JobsController as vm'
        })
        .state('home.show', {
          url: 'show/:jobId',
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
