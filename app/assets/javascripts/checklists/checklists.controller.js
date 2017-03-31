// (function(){
//
//   'use strict'
//
//   angular
//     .module('app')
//     .controller('ChecklistsController', ['ChecklistFactory', function(ChecklistFactory) {
//
//     var vm = this;
//
//     //callable methods on the vm
//     vm.test = "Here is the checklist!";
//     vm.createChecklist = createChecklist;
//     activate();
//
//     //defined methods on the vm
//     function activate() {
//       getChecklists();
//     }
//
//     function getChecklists() {
//       return ChecklistFactory.getChecklists()
//         .then(setChecklists)
//     }
//
//     function createChecklist() {
//       return ChecklistFactory.createChecklist(vm.Checklist)
//         .then(getChecklists())
//     }
//
//     function setChecklists(data) {
//         return vm.checklists = data;
//     }
//   }]);
//
// }())

(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory) {

        var vm = this;

        //callable methods on the vm
        vm.test = "Here is the checklist!";
        vm.createNote = createNote;
        activate();
        //defined methods on the vm
        function activate() {
            getChecklists();
        };

        function getChecklists() {
            return ChecklistFactory.getChecklists()
                .then(setChecklists);
        };

        function createChecklist() {
            return ChecklistFactory.createChecklist(vm.Checklist)
                .then(getChecklists());
        };

        function setChecklists(data) {
            return vm.checklists = data;
        };


    };

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
