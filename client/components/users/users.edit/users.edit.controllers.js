UsersEditController.$inject = ['UsersService', '$state', '$stateParams'];


function UsersEditController(UsersService, $state, $stateParams) {
	var vm = this;

	vm.current = {};
  vm.editUser = editUser;

	function activate() {
		UsersService
			.loadUser($stateParams.userId)
			.then(function resolve(response) {
				vm.current = response.data.user;
			});
	}

	function editUser() {
		UsersService
			.editUser(vm.current)
			.then(function resolve(response) {
				$state.go('list');
			});
	}
}
<<<<<<< HEAD
=======

>>>>>>> 86346c3e6e66ae9e4580be19270db251ed9ebb67
module.exports = UsersEditController;
