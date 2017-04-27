(function(){

    'use strict';

    function ChecklistFactory($http) {

        return {
            getChecklist: getChecklist,
            createChecklist: createChecklist
        }

        function getChecklist(jobId) {
          return $http.get('/jobs/' + jobId + '/checklist')
            .then(handleSuccess)
            .catch(handleError)
        };

        function createChecklist(checklist, jobId) {
          var req = {
              method: 'POST',
              url: '/jobs/' + jobId + '/checklist',
              headers: {
                  'Content-Type': 'application/json'
              },
              data: {
                  checklist: checklist
              }
          };

          return $http(req)
                     .then(handleSuccess)
                     .catch(handleError)
        };

        function handleSuccess(response) {
            return response.data;
        };

        function handleError(error) {
            console.log("checklist factory response error: ", error);
        };

    };

    ChecklistFactory.$inject = ['$http'];

    angular
      .module('app')
      .factory('ChecklistFactory', ChecklistFactory);

}());
