(function() {


  'use strict';

  angular
    .module('app', ['templates', 'ui.router', 'Devise', 'ngMessages'])
    .config(['$httpProvider', function($httpProvider) {
        // for CSRF errors
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }]);
}())
