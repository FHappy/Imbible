CocktailsFormController.$inject = ['CocktailsService', '$stateParams'];

function CocktailsFormController(CocktailsService, $stateParams) {
    const vm = this;

    vm.coctails = [];

    activate();



}

module.exports = CocktailsFormController;

