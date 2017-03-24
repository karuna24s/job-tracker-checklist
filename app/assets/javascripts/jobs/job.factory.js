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

    function createJob(job) {
      var req = {
          method: 'POST',
          url: '/jobs',
          headers: {
              'Content-Type': 'application/json'
          },
          data: {
              job: job
          }
      };

      return $http(req)
                 .catch(handleError)
    };

    function updateJob() {

    };

    function deleteJob() {

    };

    function handleSuccess(response) {
      //$http requests return a promise which needs to be parsed for its .data attribute
      //print to console to confirm visually
      console.log(response);
      //return to controller
      return response.data;
    };

    function handleError(error) {
      //print to console to confirm visually
      console.log(error);
    };

  };

  angular
    .module('app')
    .factory('JobFactory', JobFactory);

}());
