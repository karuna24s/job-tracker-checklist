(function(){

  'use strict'

  angular
    .module('app')
    .controller('ChecklistsController', ['ChecklistFactory', function(ChecklistFactory) {
    var vm = this;

    vm.createChecklist = createChecklist;

    activate();

    function activate() {
      getChecklists();
    }

    function getChecklists() {
      return ChecklistFactory.getChecklists()
        .then(setChecklists)
    }

    function createChecklist() {
      return ChecklistFactory.createChecklist(vm.newChecklist)
      .then(getChecklists())
    }

    function setChecklists(data) {
      return vm.checklists = data;
    }
  }]);

}())
