(function(){

    'use strict';

    function ItemFactory($http) {

        return {
            getItems: getItems
        }

        function getItems() {
            return $http.get('/items')
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
      .factory('ItemFactory', ItemFactory);

}());
