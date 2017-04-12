NavbarController.$inject = ['AuthenticationService'];

function NavbarController(AuthenticationService) {
    const vm = this;
    vm.isLoggedIn = AuthenticationService.isLoggedIn();
}

module.exports = NavbarController;
