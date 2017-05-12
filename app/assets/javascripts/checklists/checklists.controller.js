(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory, ItemFactory, $state, $stateParams, $scope) {

        var vm = this;
        vm.selectedItems = [];
        //callable methods on the vm
        vm.getChecklist = getChecklist;
        vm.createItem = createItem;
        vm.selectItem = selectItem;
        vm.destroyItems = destroyItems;
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

        function selectItem(item) {
          vm.selectedItems.push(item.id);
        }

        function destroyItems() {
            return ItemFactory.destroyItems(vm.checklist.id, vm.selectedItems)
                       .then(function() {
                         vm.checklist.items = vm.checklist.items.filter(function(item) {
                           return vm.selectedItems.indexOf(item.id) == -1;
                         });
                        //  vm.checklist.items = vm.checklist.items.map(function(item){
                        //    if (vm.selectedItems.indexOf(item.id) == -1) {
                        //      return item;
                        //    }
                        //  })
                        //  var items = [];
                        //  vm.checklist.items.forEach(function(item) {
                        //    if (vm.selectedItems.indexOf(item.id) == -1) {
                        //      items.push(item);
                        //    }
                        //  })
                        //  vm.checklist.items = items;

                       });
        }



    };

    ChecklistsController.$inject = ['ChecklistFactory', 'ItemFactory','$state', '$stateParams', '$scope'];

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
