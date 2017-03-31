(function() {

  'use strict'

  angular
    .module('app')
    .factory('ChecklistFactory', ['$http', '$state', function($http, $state) {

    return {
      getChecklists: getChecklists,
      createChecklist: createChecklist
    }

    function getChecklists() {
      return $http.get('/jobs/' + $state.param.id + '/checklists')
        .then(handleSuccess)
        .then(handleError)
    }

    function createChecklist(checklist) {
      var req = {
        method: 'POST',
        url: '/jobs/' + $state.params.id + '/checklists',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            checklist: checklist
        }
      }

      return $http(req)
        .then(handleSuccess)
        .catch(handleError)
    }

    function handleSuccess(response) {
      console.log(response);
      return response.data;
    }

    function handleError(error) {
      console.log(error);
    }
  }]);

}())



// (function(){
//
//     'use strict';
//
//     function ChecklistFactory($http) {
//
//         return {
//             getChecklists: getChecklists
//         }
//
//         function getChecklists() {
//             return $http.get('/checklists')
//                 .then(handleSuccess)
//                 .catch(handleError)
//         };
//
//         function handleSuccess(response) {
//             console.log(response);
//             return response.data;
//         };
//
//         function handleError(error) {
//             console.log(error);
//         };
//
//     };
//
//   angular
//       .module('app')
//       .factory('ChecklistFactory', ChecklistFactory);
//
// }());
