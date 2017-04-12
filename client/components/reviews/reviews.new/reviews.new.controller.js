ReviewsNewController.$inject = ['CocktailsService', '$state', 'AuthenticationService', '$stateParams'];

function ReviewsNewController(CocktailsService, $state, AuthenticationService, $stateParams) {

    const vm = this;

    vm.addNewReview = addNewReview;
    vm.newReview = {};
    vm.isLoggedIn = AuthenticationService.isLoggedIn();
    vm.currentUser = AuthenticationService.currentUser();

    activate();

    function activate() {
    };

    function addNewReview() {
      console.log(vm.currentUser);
      vm.newReview.reviewer = vm.currentUser.email;
      var id = $stateParams.cocktailId;
      console.log(vm.newReview);
        CocktailsService
            .addReview(id, vm.newReview)
            .then(function resolve(response) {
                vm.newReview = {};
                $state.go('list');
            });
    }


}

module.exports = ReviewsNewController;
