(function() {
  'use strict';

  function HomeController() {
    var vm = this;

    // callable methods on the view model
    vm.name = 'Karuna'
  };

  angular
    .module('app')
    .controller('HomeController', HomeController);
}());
