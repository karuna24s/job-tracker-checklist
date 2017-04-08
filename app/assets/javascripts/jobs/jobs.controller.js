(function() {
  'use strict';

  function JobsController(JobFactory, $state, $filter) {
    var vm = this;

    // callable methods on the vm

    vm.getJobs = getJobs;
    vm.createJob = createJob;
    vm.updateStatus = updateStatus;
    vm.refilter = refilter;

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
    console.log($state);

    //defined methods on the vm
    function activate() {
      getJobs();
    };

    function getJobs() {
      return JobFactory.getJobs()
            .then(setJobs)
            .then(setFilteredList)
    };

    function createJob() {
      return JobFactory.createJob(vm.Job)
            .then(showJob)
    };

    function updateStatus(jobId, jobStatus) {
      return JobFactory.updateStatus(jobId, jobStatus)
    }

    function setJobs(data) {
      return vm.jobs = data;
    };

    function setFilteredList(data) {
      return vm.filteredList = data;
    };

    function refilter() {
      return vm.filteredList = $filter('filter')(vm.jobs, vm.search);
    };

    function showJob(data) {
        $state.go('home.show', { jobId: data.id });
    };


  };

  JobsController.$inject = ['JobFactory', '$state', '$filter'];

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
