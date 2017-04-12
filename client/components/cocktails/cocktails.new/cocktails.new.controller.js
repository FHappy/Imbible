CocktailsNewController.$inject = ['CocktailsService', '$state', 'AuthenticationService'];

function CocktailsNewController(CocktailsService, $state, AuthenticationService) {

	const vm = this;

	vm.addNewCocktail = addNewCocktail;
	vm.newCocktail = {
		ingredients: []
	};
	vm.currentUser = AuthenticationService.currentUser();
	vm.addIngredient = addIngredient
	vm.newIngredient = {};

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

	function addIngredient() {
		vm.newCocktail.ingredients.push(vm.newIngredient);
		vm.newIngredient = {};
		console.log(vm.newIngredient);
	}
}

module.exports = CocktailsNewController;
