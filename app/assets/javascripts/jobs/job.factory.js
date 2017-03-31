// (function() {
//
//   'use strict'
//
//   angular
//     .module('app')
//     .factory('JobFactory', ['$http', '$state', function($http, $state) {
//
//     //callable methods on JobFactory
//     return {
//       getJobs: getJobs,
//       getJob: getJob,
//       createJob: createJob,
//       updateJob: updateJob,
//       updateStatus: updateStatus,
//       destroyJob: destroyJob
//     }
//
//     //define methods
//     function getJobs() {
//       return $http.get('/jobs')
//         .then(handleSuccess)
//         .catch(handleError)
//     }
//
//     function getJob(id) {
//       return $http.get('/jobs/' + id)
//         .then(handleSuccess)
//         .catch(handleError)
//     }
//
//     function createJob(job) {
//       var req = {
//         method: 'POST',
//         url: '/jobs',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         data: {
//           job: job
//         }
//       }
//       return $http(req)
//         .then(handleSuccess)
//         .catch(handleError)
//     }
//
//     function updateJob(job) {
//       var req = {
//         method: 'PATCH',
//         url: '/jobs/' + job.id,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         data: {
//           job: job
//         }
//       }
//       return $http(req)
//         .then(handleSuccess)
//         .catch(handleError)
//     }
//
//     function updateStatus(id, status) {
//       var req = {
//         method: 'PATCH',
//         url: '/jobs/' + id,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         data: {
//           status: status
//         }
//       }
//       return $http(req)
//         .then(handleSuccess)
//         .catch(handleError)
//     }
//
//     function destroyJob(id) {
//       return $http.delete('/jobs/' + id)
//               .then(handleSuccess)
//               .catch(handleError)
//     }
//
//     function handleSuccess(response) {
//       //$http requests return a promise which needs to be parsed for its .data attribute
//       //print to console to confirm visually
//       console.log(response);
//       //return to controller
//       return response.data;
//     }
//
//     function handleError(error) {
//       //print to console to confirm visually
//       console.log(error);
//     }
//
//   }]);
//
// }())
//
//
//
(function() {

  'use strict';

  function JobFactory($http, $state) {
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

    function updateStatus(id, status) {
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
