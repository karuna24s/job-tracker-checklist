(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state, $stateParams, $scope) {

        var vm = this;
        //callable methods on the vm
        vm.getChecklist = getChecklist;
        vm.createItem = createItem;
        // vm.destroyItem = destroyItem;
        activate();
        // console.log($state);
        //defined methods on the vm
        function activate() {
          getChecklist();
        };

        function getChecklist() {
            return ChecklistFactory.getChecklist($state.params.jobId)
                .then(setChecklist);
        };

        function createChecklist() {
            return ChecklistFactory.createChecklist(vm.checklist)
                .then(getChecklist());
        };

        function setChecklist(data) {
            return vm.checklist = data;
        };

        function createItem() {
            console.log($stateParams.id)
            return ItemFactory.createItem(vm.checklist.item, vm.checklist.id)
                .then(item => {
                  vm.checklist.items.push(item)
                  vm.checklist.item.task = "";
                });
        };

        // function destroyItem() {
        //     return ItemFactory.destroyItem(vm.checklist.id)
        //                .then(item => {
        //                  vm.checklist.items.splice(item)
        //                  vm.checklist.item.task = "";
        //                });
        // }

        // $scope.removeSelected = function() {
        //   var i = $scope.phonelist.length;
        //   // reversed loop because you change the array
        //   while (i--) {
        //     var phone = $scope.phonelist[i];
        //     if (phone.checked) {
        //       $scope.phonelist.splice(i, 1);
        //     }
        //   }
        // }


    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state', '$stateParams', '$scope'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
