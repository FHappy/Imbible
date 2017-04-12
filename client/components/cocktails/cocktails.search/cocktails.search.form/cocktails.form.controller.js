CocktailsFormController.$inject = ['CocktailsService', '$stateParams', '$scope', 'SearchFactory'];

function CocktailsFormController(CocktailsService, $stateParams, $scope, SearchFactory) {
    const vm = this;

    vm.coctails = [];
    vm.search = search;
    vm.newSearchTerm;
    activate();

    function activate() {
        SearchFactory.terms = [];
    };

    function search(newSearchTerm) {
        if (newSearchTerm) {
          SearchFactory.terms.push(newSearchTerm);
          vm.newSearchTerm = null;
          // var allSearchTerms = SearchFactory.terms;
          // var searchUrl = '?';
          // for (var i = 0; i < allSearchTerms.length; i++) {
          //     searchUrl += 'q' + i + '=' + allSearchTerms[i];
          //     if (i !== allSearchTerms.length - 1) {
          //       searchUrl += '&';
          //     }
          // }
          var searchUrl = SearchFactory.generateUrl();
          CocktailsService
              .search(searchUrl)
              .then(function resolve(response) {
                // update factory values, so it will change other components
                  // SearchFactory.eitherResults = response.data.orCocktails;
                  // SearchFactory.allResults = response.data.andCocktails;
                  SearchFactory.setResults(response.data.orCocktails,
                                           response.data.andCocktails);
              }, function reject(response) {
                  return ({message: 'No results found.'});
              });
        }

    }


}

module.exports = CocktailsFormController;
