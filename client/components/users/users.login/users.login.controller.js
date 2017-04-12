UsersLoginController.$inject = ['UsersService', '$state', 'AuthenticationService'];

function UsersLoginController(UsersService, $state, AuthenticationService) {
    const vm = this;

    vm.info = {
      email: '',
      password: ''
    };

    vm.login = login;

    function login() {
      AuthenticationService
          .login(vm.info)
          .then(function resolve(response) {
            $state.go('list');
          }, function reject(response) {
            console.log(response.data.err);
          });
    }
}

module.exports = UsersLoginController;
