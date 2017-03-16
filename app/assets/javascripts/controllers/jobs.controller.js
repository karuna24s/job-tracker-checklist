(function() {
  'use strict';

  function JobsController() {
    var vm = this;

    // callable methods on the vm
    vm.test = "View the jobs!";

    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {

    };

  };

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
