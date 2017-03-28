(function() {
  'use strict';

  function JobsController(JobFactory, $state) {
    var vm = this;

    // callable methods on the vm
    vm.test = "View the jobs!";
    vm.createJob = createJob;
    vm.getJob = getJob;
    vm.updateJob = updateJob;

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
      return JobFactory.createJob(vm.Job)
             .then(getJobs)
    };

    function updateJob() {
      return JobFactory.updateJob(vm.Job)
            .then(showUpdatedJob);
    };

    function setJobs(data) {
      return vm.jobs = data;
    };

    function setJob(data) {
      return vm.showJob = data;
    };

    function showUpdatedJob(data) {
        $state.go('jobs.show', { jobId: data.id });
    };

  };

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
