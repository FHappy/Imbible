CocktailsEditController.$inject = ['CocktailsService', '$stateParams', '$state'];

function CocktailsEditController(CocktailsService, $stateParams, $state) {

	const vm = this;

	vm.current = {};
	vm.editCocktail = editCurrentCocktail;

	activate();

	function activate() {
    CocktailsService
        .loadCocktail($stateParams.cocktailId)
        .then(function resolve(response) {
            vm.current = response.data.cocktail;
						console.log(vm.current);
        });
}

	function editCurrentCocktail() {
		CocktailsService
			.editCocktail(vm.current)
			.then(function resolve(response) {
				console.log(response.data.message);
				console.log('cocktail post patch method is ');
				console.log(vm.current);
				$state.go('show', {
					cocktailId: vm.current._id
				});
			});
	}
}

module.exports = CocktailsEditController;
