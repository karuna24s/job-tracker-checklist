(function() {
  'use strict';

  function JobsController(JobFactory) {
    var vm = this;

    // callable methods on the vm
    vm.test = "View the jobs!";

    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {
      getJobs();
    };

    function getJobs() {
      return JobFactory.getJobs()
            .then(setJobs);
    };

    function setJobs(data) {
      return vm.jobs = data;
    };

  };

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
