(function(){

    'use strict';

    function ItemFactory($http) {

        return {
            getItems: getItems,
            getItem: getItem,
            createItem: createItem
        }

        function getItems(checklistId) {
          // debugger;
            return $http.get('/checklist/' + checklistId + '/items/')
                .then(handleSuccess)
                .catch(handleError)
        };

        function getItem(itemId) {
          // debugger;
          return $http.get('/items/' + itemId)
            .then(handleSuccess)
            .catch(handleError)
        };

        function createItem(item, checklistId) {
          // debugger;
          var req = {
              method: 'POST',
              url: '/checklist/' + checklistId  + '/items/',
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
