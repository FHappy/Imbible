function CocktailsSearchFactory() {

    function setTerms(newTerms) {
        this.terms = newTerms;
    }

    return {
        terms: [],
        eitherResults: [],
        allResults: [],
        setTerms: setTerms
    };
}

angular
    .module('imbibleApp')
    .factory('SearchFactory', CocktailsSearchFactory);
