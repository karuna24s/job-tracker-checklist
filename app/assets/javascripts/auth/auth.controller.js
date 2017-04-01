(function(){

    'use strict';

    function AuthController($scope, $state, Auth) {

        var vm = this;

        //callable methods on the vm
        vm.login = login;
        vm.register = register;

        //defined methods on the vm
        function login() {
            Auth.login(vm.user)
                .then(goToJobs);
        };

        function register() {
            Auth.register(vm.user)
                .then(goToJobs);
        };

        function goToJobs() {
            $state.go('home.jobs');
        };

    };

    angular
        .module('app')
        .controller('AuthController', AuthController);
}());
