// angular
//     .module('imbibleApp')
//     .controller('NewController', NewController);
UsersNewController.$inject = ['UsersService', '$state', 'AuthenticationService'];

function UsersNewController(UsersService, $state, AuthenticationService) {
    const vm = this;

    vm.addNewUser = addNewUser;
    vm.newUser = {};

    function addNewUser() {
        // UsersService
        //   .createUser(vm.newUser)
        //   .then(function resolve(response) {
        //     vm.newUser = {};
        //     $state.go('list');
        //   });
        AuthenticationService
            .createUser(vm.newUser)
            .then(function resolve(response) {
              vm.newUser = {};
              $state.go('list');
            });
    }
}

module.exports = UsersNewController;
