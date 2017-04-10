// basic routing example, might need to put back into the app.js file *shrug*
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            template: '<cocktails-list></cocktails-list>'
        })
        .state('cocktailShow', {
        	url: '/:_id',
        	template: '<cocktail></cocktail>'
        });

    $urlRouterProvider.otherwise('/');
}

module.exports = uiRouterSetup;
