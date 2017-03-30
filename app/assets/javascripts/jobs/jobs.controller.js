(function() {
  'use strict';

  function JobsController(JobFactory, $state) {
    var vm = this;
    console.log($state);

    // callable methods on the vm
    vm.test = "View the jobs!";
    vm.getJobs = getJobs;
    vm.createJob = createJob;
    vm.getJob = getJob;
    vm.updateJob = updateJob;
    vm.destroyJob = destroyJob;
    vm.updateStatus = updateStatus;

    vm.statuses = [
      {id: 1, value: 'Discovered'},
      {id: 2, value: 'Application in Progress'},
      {id: 3, value: 'Applied'},
      {id: 4, value: 'Interviewing'},
      {id: 5, value: 'Pending Response'},
      {id: 6, value: 'No Response'},
      {id: 7, value: 'Job Offer Received'},
      {id: 8, value: 'Job Offer Accepted'},
      {id: 9, value: 'Job Offer Declined'}
    ];


    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {
      if ($state.current.name == "jobs.list") {
        getJobs();
      }
      else if  ($state.current.name == "jobs.show") {
        getJob($state.params.id)
      }
    };

    function getJobs() {
      return JobFactory.getJobs()
            .then(setJobs);
    };

    function getJob(params) {
      return JobFactory.getJob(params)
            .then(setJob);
    };

    function createJob() {
      // debugger;
      return JobFactory.createJob(vm.Job)
             .then(showJobs)
    };

    function updateJob() {
      return JobFactory.updateJob(vm.Job)
            .then(showJob);
    };

    function destroyJob(id) {
      return JobFactory.destroyJob(id)
            .then(showJobs);
    };

    function updateStatus(jobId, jobStatus) {
      return JobFactory.updateStatus(jobId, jobStatus)
    }

    function setJobs(data) {
      return vm.jobs = data;
    };

    function setJob(data) {
      return vm.showJob = data;
    };

    function showJob(data) {
        $state.go('jobs.show', { jobId: data.id });
    };

    function showJobs() {
        $state.go('jobs.list');
    };

  };

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
