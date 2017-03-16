(function() {
  'use strict';

  function HomeController() {
    var vm = this;

    // callable methods on the vm
    vm.name = 'Karuna'
    vm.test = "Let's see if this shows!";

    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {

    };

  };

  angular
    .module('app')
    .controller('HomeController', HomeController);
}());
