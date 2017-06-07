(function() {
  'use strict';

  function JobsController(JobFactory, $state, $filter, Auth) {
    var vm = this;

    // callable methods on the vm
    vm.getJobs = getJobs;
    vm.createJob = createJob;
    vm.signedIn = Auth.isAuthenticated();
    vm.updateStatus = updateStatus;
    vm.refilter = refilter;

    // vm.counter = 0;



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

//
    //instantiated info
    activate();

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
      if (vm.signedIn) {
                return JobFactory.createJob(vm.job)
                       .then(showJob)
            } else {
                alert("Whoops. You need to be signed in to create a Job.");
                $state.go('home.login')
            }

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

    // function voteJob(jobId) {
    //   return JobFactory.voteJob(jobId)
    //         .then(updateVote);
    // };
    //
    // // sort the votes
    // function sortVotes() {
    //   vm.filteredList.sort(function(a, b) {
    //     if (a.vote_count < b.vote_count) {
    //       return -1;
    //     }
    //     else if (a.vote_count > b.vote_count) {
    //       return +1;
    //     }
    //     else {
    //       return 0;
    //     }
    //   })
    //   console.log(vm.filteredList);
    // }
    //
    // function updateVote(data) {
    //   for (var i = 0; i < vm.jobs.length; i++) {
    //     if (vm.jobs[i].id == data.id) {
    //       vm.jobs[i].vote_count = data.vote_count;
    //     }
    //   }
    // };



  };

  JobsController.$inject = ['JobFactory', '$state', '$filter', 'Auth'];

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
