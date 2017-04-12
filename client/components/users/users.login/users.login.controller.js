UsersLoginController.$inject = ['UsersService', '$state', 'AuthenticationService'];

function UsersLoginController(UsersService, $state, AuthenticationService) {
    const vm = this;

    vm.info = {};

    vm.login = login;

    activate();
    function activate() {
      vm.info = {
        email: '',
        password: ''
      };
    }

    function login() {
      console.log('controller login function hit');
      AuthenticationService
          .login(vm.info)
          .then(function () {
            $state.go('list');
          }, function reject(response) {
            console.log(response.data.err);
          });
    }
}

module.exports = UsersLoginController;
