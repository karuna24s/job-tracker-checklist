(function(){

    'use strict';

    function ItemFactory($http, $state) {

        return {
            getItems: getItems,
            createItem: createItem
        }

        function getItems() {
            return $http.get('/jobs/' + $state.params.id + '/checklists' + '/items/')
                .then(handleSuccess)
                .catch(handleError)
        };

        function createItem(item) {
          var req = {
              method: 'POST',
              url: '/jobs/' + $state.params.id + '/checklists' + '/items/',
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

  angular
      .module('app')
      .factory('ItemFactory', ItemFactory);

}());


// (function() {
//
//   'use strict'
//
//   angular
//     .module('app')
//     .factory('ItemFactory', ['$http', '$state', function($http, $state) {
//
//     return {
//       getItems: getItems,
//       createItem: createItem
//     }
//
//     function getItems() {
//       return $http.get('/jobs/' + $state.params.id + '/checklists' + '/items')
//         .then(handleSuccess)
//         .then(handleError)
//     }
//
//     function createItem(item) {
//       var req = {
//         method: 'POST',
//         url: '/jobs/' + $state.params.id + '/checklists' + '/items',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: {
//             item: item
//         }
//       }
//
//       return $http(req)
//         .then(handleSuccess)
//         .catch(handleError)
//     }
//
//     function handleSuccess(response) {
//       console.log(response);
//       return response.data;
//     }
//
//     function handleError(error) {
//       console.log(error);
//     }
//   }]);
//
// }())
//
//
// // (function(){
// //
// //     'use strict';
// //
// //     function ItemFactory($http) {
// //
// //         return {
// //             getItems: getItems
// //         }
// //
// //         function getItems() {
// //             return $http.get('/items')
// //                 .then(handleSuccess)
// //                 .catch(handleError)
// //         };
// //
// //         function handleSuccess(response) {
// //             console.log(response);
// //             return response.data;
// //         };
// //
// //         function handleError(error) {
// //             console.log(error);
// //         };
// //
// //     };
// //
// //   angular
// //       .module('app')
// //       .factory('ItemFactory', ItemFactory);
// //
// // }());
