(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state, $stateParams) {

        var vm = this;

        //callable methods on the vm
        vm.getChecklists = getChecklists;
        vm.getItems = getItems;
        vm.createChecklist = createChecklist;

        activate();
        // console.log($state);
        //defined methods on the vm
        function activate() {
            getChecklists();
            getItems();
        };

        function getChecklists() {
            // debugger;
            // console.log($state.params.jobId)
            return ChecklistFactory.getChecklists($state.params.jobId)
                .then(setChecklists);
        };

        function createChecklist(checklist) {
            // debugger;
            return ChecklistFactory.createChecklist(vm.checklist, $state.params.id)
                .then(getChecklists());
        };

        function setChecklists(data) {
            vm.items = data[0].items
            return vm.checklists = data;
        };

        function getItems() {
           //debugger;
            // console.log($state.params.checklistId)
            return ItemFactory.getItems($state.params.checklistId)
                .then(setItems);
        };

        function setItems(data) {
            return vm.items = data;
        };



    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state', '$stateParams'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
