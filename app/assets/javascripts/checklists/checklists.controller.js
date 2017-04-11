(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state) {

        var vm = this;

        //callable methods on the vm
        vm.test = "Here is the checklist!";
        vm.createChecklist = createChecklist;
        vm.createItem= createItem;
        activate();
        //defined methods on the vm
        function activate() {
            getChecklists();
            getItems();
        };

        function getChecklists() {
            return ChecklistFactory.getChecklists($state.params.id)
                .then(setChecklists);
        };

        function createChecklist() {
            return ChecklistFactory.createChecklist(vm.checklist, $state.params.id)
                .then(getChecklists());
        };

        function setChecklists(data) {
            return vm.checklists = data;
        };

        function getItems() {
            return ItemFactory.getItems($state.params.id)
                .then(setItems);
        };

        function createItem(item) {
            return ItemFactory.createItem(vm.item, $state.params.id)
                .then(item => vm.items.push(item));
        };

        function setItems(data) {
            return vm.items = data;
        };



    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
