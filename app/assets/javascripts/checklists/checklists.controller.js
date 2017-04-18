(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state, $stateParams) {

        var vm = this;

        //callable methods on the vm
        vm.getChecklists = getChecklists;
        // vm.getItems = getItems;
        vm.createChecklist = createChecklist;

        activate();
        // console.log($state);
        //defined methods on the vm
        function activate() {
            getChecklists();
            // getItems();
        };

        function getChecklists() {
            // debugger;
            return ChecklistFactory.getChecklists($state.params.jobId)
                .then(setChecklists);
        };

        function createChecklist() {
            // debugger;
            return ChecklistFactory.createChecklist(vm.checklist, $state.params.id)
                .then(getChecklists());
        };

        function setChecklists(data) {
            vm.items = data[0].items
            return vm.checklists = data;
        };

        // function getItems() {
        //     return ItemFactory.getItems($state.params.jobId)
        //         .then(setItems);
        // };
        //
        // function setItems(data) {
        //   console.log(data)
        //     return vm.items = data;
        // };



    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state', '$stateParams'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
