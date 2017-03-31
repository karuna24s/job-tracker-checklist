// (function(){
//
//   'use strict'
//
//   angular
//     .module('app')
//     .controller('ItemsController', ['ItemFactory', function(ItemFactory) {
//
//     var vm = this;
//
//     //callable methods on the vm
//     vm.test = "Here are the items!";
//     vm.createItem = createItem;
//     activate();
//
//     //defined methods on the vm
//     function activate() {
//       getItems();
//     }
//
//     function getItems() {
//       return ItemFactory.getItems()
//         .then(setItems)
//     }
//
//     function createItem() {
//       return ItemFactory.createItem(vm.Item)
//         .then(getItems())
//     }
//
//     function setItems(data) {
//         return vm.items = data;
//     }
//   }]);
//
// }())
//
//
//
// // (function(){
// //
// //     'use strict';
// //
// //     function ItemsController(ItemFactory) {
// //
// //         var vm = this;
// //
// //         //callable methods on the vm
// //         vm.test = "Here are the items!";
// //         vm.createItem = createItem;
// //         activate();
// //         //defined methods on the vm
// //         function activate() {
// //             getItems();
// //         };
// //
// //         function getItems() {
// //             return ItemFactory.getItems()
// //                 .then(setItems);
// //         };
// //
// //         function createItem() {
// //             return ItemFactory.createItem(vm.Item)
// //                 .then(getItems());
// //         };
// //
// //         function setItems(data) {
// //             return vm.items = data;
// //         };
// //
// //
// //     };
// //
// //     angular
// //       .module('app')
// //       .controller('ItemsController', ItemsController);
// //
// // }());
