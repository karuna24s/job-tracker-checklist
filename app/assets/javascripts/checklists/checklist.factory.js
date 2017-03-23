(function(){

    'use strict';

    function ChecklistFactory($http) {

        return {
            getChecklists: getChecklists
        }

        function getChecklists() {
            return $http.get('/checklists')
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

  angular
      .module('app')
      .factory('ChecklistFactory', ChecklistFactory);

}());
