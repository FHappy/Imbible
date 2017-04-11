

function CocktailsSearchFactory() {

    function setTerms(newTerms) {
        this.terms = newTerms;
    }

    function generateUrl() {
        var allSearchTerms = this.terms;
        var searchUrl = '?';
        for (var i = 0; i < allSearchTerms.length; i++) {
            searchUrl += 'q' + i + '=' + allSearchTerms[i];
            if (i !== allSearchTerms.length - 1) {
                searchUrl += '&';
            }
        }
        return searchUrl;
    }

    function setResults(newEither, newAll) {
      this.eitherResults = newEither;
      this.allResults = newAll;
    }

    return {
        terms: [],
        eitherResults: [],
        allResults: [],
        setTerms: setTerms,
        generateUrl: generateUrl,
        setResults: setResults
    };
}

angular
    .module('imbibleApp')
    .factory('SearchFactory', CocktailsSearchFactory);
