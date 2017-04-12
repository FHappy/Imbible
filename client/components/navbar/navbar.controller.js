NavbarController.$inject = ['AuthenticationService', '$state', '$scope'];

function NavbarController(AuthenticationService, $state, $scope) {
    const vm = this;
    vm.isLoggedIn = false;
    vm.logout = logout;

    activate();

    function activate() {
        // AuthenticationService.checkLogin();
    }

    function logout() {
      AuthenticationService.logout();
      $state.go('list');
    }

    $scope.$watch(function() {
      return AuthenticationService.isLoggedIn();
    }, function (newValue, oldValue) {
      vm.isLoggedIn = newValue;
    });




}

module.exports = NavbarController;
