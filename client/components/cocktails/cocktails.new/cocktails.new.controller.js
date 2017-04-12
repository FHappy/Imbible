CocktailsNewController.$inject = ['CocktailsService', '$state', 'AuthenticationService'];

function CocktailsNewController(CocktailsService, $state, AuthenticationService) {

	const vm = this;

	vm.addNewCocktail = addNewCocktail;
	vm.newCocktail = {};
	vm.currentUser = AuthenticationService.currentUser();

	activate();

	function activate() {

	};

	function addNewCocktail() {
		vm.newCocktail.createdBy = vm.currentUser.email;
		CocktailsService
			.addCocktail(vm.newCocktail)
			.then(function resolve(response) {
				vm.newCocktail = {};
				$state.go('list');
			});
	}
}

module.exports = CocktailsNewController;
