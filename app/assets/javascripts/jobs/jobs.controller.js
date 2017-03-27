(function() {
  'use strict';

  function JobsController(JobFactory) {
    var vm = this;

    // callable methods on the vm
    vm.test = "View the jobs!";
    vm.createJob = createJob;

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

    function getJob(id) {
      return JobFactory.getJob(id)
            .then(setBrewery);
    };

    function createJob() {
      // debugger;
      return JobFactory.createJob(vm.newJob)
             .then(getJobs)
    };

    function setJobs(data) {
      return vm.jobs = data;
    };

    function setJob(data) {
      return vm.showJob = data;
    }


  };

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
