CocktailsEditController.$inject = ['CocktailsService', '$stateParams'];

function CocktailsEditController(CocktailsService, $stateParams) {

	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		editCurrentCocktail();
	}

	function editCurrentCocktail() {
		CocktailsService
			.editCocktail($stateParams.cocktailId)
			.then(function resolve(response) {
				vm.current = response.data.cocktail;
			});
	}
}

module.exports = CocktailsEditController;