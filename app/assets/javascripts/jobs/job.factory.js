(function() {

  'use strict';

  function JobFactory($http) {
    return {
      getJobs: getJobs,
      getJob: getJob,
      createJob: createJob,
      updateJob: updateJob,
      updateStatus: updateStatus,
      destroyJob: destroyJob
    }

    function getJobs() {
      return $http.get('/jobs')
        .then(handleSuccess)
        .catch(handleError);
    };

    function getJob(id) {
      return $http.get('/jobs/' + id)
        .then(handleSuccess)
        .catch(handleError)
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
                 .then(handleSuccess)
                 .catch(handleError)
    };

    function updateJob(job) {
         var req = {
             method: 'PATCH',
             url: '/jobs/' + job.id,
             headers: {
                 'Content-Type': 'application/json'
             },
             data: {
               job: job
             }
         };

         return $http(req)
                    .then(handleSuccess)
                    .catch(handleError)
    };

    function updateStatus(job, status) {
         var req = {
             method: 'PATCH',
             url: '/jobs/' + id,
             headers: {
               'Content-Type': 'application/json'
             },
             data: {
               status: status
             }
         };

      return $http(req)
                 .then(handleSuccess)
                 .catch(handleError)
    };

    function destroyJob(id) {
      return $http.delete('/jobs/' + id)
              .then(handleSuccess)
              .catch(handleError)
    };

    function handleSuccess(response) {
      console.log(response);
      return response.data;
    };

    function handleError(error) {
      console.log(error);
    };

  };

  JobFactory.$inject = ['$http'];

  angular
    .module('app')
    .factory('JobFactory', JobFactory);

}());
