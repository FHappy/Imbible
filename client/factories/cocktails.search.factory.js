

function CocktailsSearchFactory() {

    function setTerms(newTerms) {
        this.terms = newTerms;
    }

    function generateUrl() {
        var allSearchTerms = this.terms;
        var searchUrl = '?';
        if (allSearchTerms.length === 0) {
          searchUrl = '';
        }
        // var params = [];
        // allSearchTerms.forEach(function iterateOver(term, index) {
        //     // var newParam = {};
        //     // var key = 'q' + index;
        //     // newParam[key] = term;
        //     // params.push(newParam);
        //     params.push(term);
        // });
        // console.log(params);
        // return params;
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
