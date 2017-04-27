(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state, $stateParams, $scope) {

        var vm = this;
        //callable methods on the vm
        vm.getChecklist = getChecklist;
        vm.createItem = createItem;

        activate();

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
            return ItemFactory.createItem(vm.checklist.item, vm.checklist.id)
                .then(item => {
                  vm.checklist.items.push(item)
                  vm.checklist.item.task = "";
                });
        };


    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state', '$stateParams', '$scope'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
