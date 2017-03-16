(function() {

  'use strict';

  function JobFactory($http) {
    return {
      getJobs: getJobs,
      getJob: getJob,
      createJob: createJob,
      updateJob: updateJob,
      deleteJob: deleteJob
    }

    function getJobs() {
      return $http.get('/jobs')
        .then(handleSuccess)
        .catch(handleError);
    };

    function getJob() {

    };

    function createJob() {

    };

    function updateJob() {

    };

    function deleteJob() {

    };

  };

  angular
    .module('app')
    .controller('JobFactory', JobFactory);

}());
