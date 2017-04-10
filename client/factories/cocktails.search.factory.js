function CocktailsSearchFactory() {

    function setTerms(newTerms) {
        this.terms = newTerms;
    }

    function setEitherResults(newEither) {
        this.eitherResults = newEither;
    }

    function setAll(newAll) {
        this.allResults = newAll;
    }

    return {
        terms: [],
        eitherResults: [],
        allResults: [],
        setTerms: setTerms,
        setEitherResults: setEitherResults,
        setAll: setAll
    };
}

angular
    .module('imbibleApp')
    .factory('SearchFactory', CocktailsSearchFactory);
