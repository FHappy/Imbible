CocktailsNewController.$inject = ['CocktailsService', '$state'];

function CocktailsNewController(CocktailsService, $state) {

	const vm = this;

	vm.addNewCocktail = addNewCocktail;
	vm.newCocktail = {};

	activate();

	function activate() {

	};

	function addNewCocktail() {
		CocktailsService
			.addCocktail(vm.newCocktail)
			.then(function resolve(response) {
				vm.newCocktail = {};
				$state.go('list')
			});
	}
}

module.exports = CocktailsNewController;