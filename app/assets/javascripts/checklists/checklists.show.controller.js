(function(){

    'use strict';

    function ChecklistsShowController(ChecklistFactory, ItemFactory, $stateParams, $state) {

        var vm = this;

        //callable methods on the vm
        // vm.getChecklist = getChecklist;
        vm.getItem = getItem;
        vm.createItem = createItem;
        activate();

        //defined methods on the vm
        function activate() {
            // getChecklist($stateParams.checklistId);
            getItem($stateParams.itemId);
        };

        // function getChecklist(id) {
        //    //debugger;
        //     return ChecklistFactory.getChecklist(id)
        //         .then(setChecklist);
        // };

        // function getItem(id) {
        //    //debugger;
        //     return ItemFactory.getItem(id)
        //         .then(setItem);
        // };

        function createItem(item, id) {
            //debugger;
            return ItemFactory.createItem(vm.item, id)
                .then(showItem);
        };

        // function setChecklist(data) {
        //     return vm.checklist = data;
        // };
        //
        function setItem(data) {
            return vm.item = data;
        };

        function showItem(data) {
          debugger
            $state.go('home.checklists', { itemId: data.id });
        };



    };

    ChecklistsShowController.$inject = ['ChecklistFactory', 'ItemFactory', '$stateParams', '$state'];

    angular
      .module('app')
      .controller('ChecklistsShowController', ChecklistsShowController);

}());
