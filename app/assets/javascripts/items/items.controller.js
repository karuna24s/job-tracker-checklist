(function(){

    'use strict';

    function ItemsController(ItemFactory) {

        var vm = this;

        //callable methods on the vm
        vm.test = "Here are the items!";

        //defined methods on the vm
        function activate() {
            getItems();
        };

        function getItems() {
            return ItemFactory.getItems()
                .then(setItems);
        };

        function setItems(data) {
            return vm.items = data;
        };


    };

    angular
      .module('app')
      .controller('ItemsController', ItemsController);

}());
