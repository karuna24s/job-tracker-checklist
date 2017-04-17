(function(){

    'use strict';

    function ItemFactory($http) {

        return {
            getItems: getItems,
            getItem: getItem,
            createItem: createItem
        }

        function getItems(checklistId) {
            return $http.get('/checklists/' + checklistId + '/items/')
                .then(handleSuccess)
                .catch(handleError)
        };

        function getItem(itemId) {
          return $http.get('/items/' + itemId)
            .then(handleSuccess)
            .catch(handleError)
        };

        function createItem(item, checklistId) {
          var req = {
              method: 'POST',
              url: '/checklists/' + checklistId  + '/items/',
              headers: {
                  'Content-Type': 'application/json'
              },
              data: {
                  item: item
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

    ItemFactory.$inject = ['$http'];

    angular
      .module('app')
      .factory('ItemFactory', ItemFactory);

}());
