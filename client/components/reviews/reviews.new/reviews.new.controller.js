ReviewsNewController.$inject = ['CocktailsService', '$state', 'AuthenticationService'];

function ReviewsNewController(CocktailsService, $state, AuthenticationService) {

    const vm = this;

    vm.addNewReview = addNewReview;
    vm.newReview = {};
    vm.isLoggedIn = AuthenticationService.isLoggedIn();

    activate();

    function activate() {

    };

    function addNewReview() {
        CocktailsService
            .addReview(vm.newReview)
            .then(function resolve(response) {
                vm.newReview = {};
                $state.go('show')
            });
    }

    
}

module.exports = ReviewsNewController;
