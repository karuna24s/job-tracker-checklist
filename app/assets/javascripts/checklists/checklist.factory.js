(function(){

    'use strict';

    function ChecklistFactory($http) {

        return {
            getChecklists: getChecklists,
            createChecklist: createChecklist
        }

        function getChecklists(jobId) {
            return $http.get('/jobs/' + jobId + '/checklists')
                .then(handleSuccess)
                .catch(handleError)
        };

        function createChecklist(checklist, jobId) {
          var req = {
              method: 'POST',
              url: '/jobs/' + jobId + '/checklists',
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
            console.log(response);
            return response.data;
        };

        function handleError(error) {
            console.log(error);
        };

    };

    ChecklistFactory.$inject = ['$http'];

    angular
      .module('app')
      .factory('ChecklistFactory', ChecklistFactory);

}());
