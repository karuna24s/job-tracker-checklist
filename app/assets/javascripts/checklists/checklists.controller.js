(function(){

    'use strict';

    function ChecklistsController() {

        var vm = this;

        //callable methods on the vm
        vm.test = "Here is the checklist!";

        // //instantiate info
        // activate();
        //
        // function activate() {
        //     getChecklists();
        // };
        //
        // function getChecklists {
        //
        // };

    };

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
