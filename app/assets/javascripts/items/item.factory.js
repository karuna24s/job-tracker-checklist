(function(){

    'use strict';

    function ItemFactory($http) {

        return {
            getItems: getItems,
            getItem: getItem,
            createItem: createItem,
            destroyItems: destroyItems
        }

        function getItems(checklistId) {
            return $http.get('/checklist/' + checklistId + '/items/')
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

        function destroyItems(checklistId, itemIds) {
          var req = {
              method: 'DELETE',
              url: '/checklist/' + checklistId  + '/items/',
              headers: {
                  'Content-Type': 'application/json'
              },
              data: {
                  itemIds: itemIds
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
