(function(){

    'use strict';

    function ChecklistsController(ChecklistFactory) {

        var vm = this;

        //callable methods on the vm
        vm.test = "Here is the checklist!";

        //defined methods on the vm
        function activate() {
            getChecklists();
        };

        function getChecklists() {
            return ChecklistFactory.getChecklists()
                .then(setChecklists);
        };

        function setChecklists(data) {
            return vm.checklists = data;
        };


    };

    angular
      .module('app')
      .controller('ChecklistsController', ChecklistsController);

}());
