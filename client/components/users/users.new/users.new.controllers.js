// angular
//     .module('imbibleApp')
//     .controller('NewController', NewController);
UsersNewController.$inject = ['UsersService', '$state'];

function UsersNewController(UsersService, $state) {
    const vm = this;

    vm.addNewUser = addNewUser;
    vm.newUser = {};

    function addNewUser() {
        UsersService
          .createUser(vm.newUser)
          .then(function resolve(response) {
            vm.newUser = {};
            $state.go('list');
          });
    }
}
