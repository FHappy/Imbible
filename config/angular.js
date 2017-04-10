// basic routing example, might need to put back into the app.js file *shrug*
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            template: '<cocktails-list></cocktails-list>'
        })
        .state('cocktailShow', {
        	url: '/show/:cocktailId',
        	template: '<cocktail></cocktail>'
        })
        .state('cocktailForm', {
            url: '/cocktail/search',
            template: '<cocktail-form></cocktails-form>'
        });

    $urlRouterProvider.otherwise('/');
}

module.exports = uiRouterSetup;
