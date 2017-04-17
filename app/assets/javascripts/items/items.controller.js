// (function(){
//
//     'use strict';
//
//     function ItemsController(ItemFactory, $state) {
//
//         var vm = this;
//
//         //callable methods on the vm
//         vm.test = "Here are the items!";
//         vm.createItem = createItem;
//         activate();
//         //defined methods on the vm
//         function activate() {
//             getItems();
//         };
//
//         function getItems() {
//             return ItemFactory.getItems($state.params.id)
//                 .then(setItems);
//         };
//
//         function createItem() {
//             return ItemFactory.createItem(vm.item, $state.params.id)
//                 .then(item => vm.items.push(item));
//         };
//
//         function setItems(data) {
//             return vm.items = data;
//         };
//
//
//     };
//
//     ItemsController.$inject = ['ItemFactory', '$state'];
//
//     angular
//       .module('app')
//       .controller('ItemsController', ItemsController);
//
// }());
