(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state, $stateParams) {

        var vm = this;
        //callable methods on the vm
        vm.getChecklist = getChecklist;
        // vm.getItems = getItems;
        vm.createChecklist = createChecklist;
        // vm.createItem = createItem;

        activate();
        console.log($state);
        //defined methods on the vm
        function activate() {
          getChecklist();
          // getItems();
            // if ($state.params.jobId) {
            //   getChecklist();
            // } else if ($state.params.checklistId) {
            //   // get something else
            // } else {
            //   // default
            // }
            //
            // // getItems();
        };

        function getChecklist() {
            //debugger;
            //console.log($state.params.jobId)
            return ChecklistFactory.getChecklist($state.params.jobId)
                .then(setChecklist);
        };

        function createChecklist() {
            // debugger;
            console.log($state.params.id)
            return ChecklistFactory.createChecklist(vm.checklist, $state.params.id)
                .then(getChecklist());
        };

        function setChecklist(data) {
          // debugger;
            return vm.checklist = data;
        };

        // function getItems() {
        //   //  debugger;
        //   //  console.log($state.params.checklistId)
        //     return ItemFactory.getItems($state.params.checklistId)
        //         .then(setItems);
        // };
        //
        // function createItem() {
        //     //debugger;
        //     return ItemFactory.createItem(vm.item)
        //         .then(item => vm.checklist.items.push(item));
        // };
        //
        // function setItems(data) {
        //     return vm.items = data;
        // };
        //
        // function showItem(data) {
        //   // debugger
        //     $state.go('home.checklists', { itemId: data.id });
        // };

        // function addItem(task) {
        //   return itemFactory(task, checklistId)
        //
        // }

        // function getItems() {
        //    //debugger;
        //     // console.log($state.params.checklistId)
        //     return ItemFactory.getItems($state.params.checklistId)
        //         .then(setItems);
        // };
        //
        // function setItems(data) {
        //     return vm.items = data;
        // };



    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state', '$stateParams'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
