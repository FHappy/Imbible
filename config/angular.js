// basic routing example, might need to put back into the app.js file *shrug*
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            template: '<cocktails-list></cocktails-list>'
        })
        .state('show', {
            url: '/cocktails/show/:cocktailId',
            template: '<cocktail></cocktail>'
        })
        .state('search', {
            url: '/cocktails/search',
            template: '<cocktails-search></cocktails-search>'
        })
        .state('edit', {
            url: '/cocktails/edit/:cocktailId',
            template: '<cocktails-edit></cocktails-edit>'
        })
        .state('new', {
            url: '/cocktails/new',
            template: '<cocktails-new></cocktails-new>'
        });

    $urlRouterProvider.otherwise('/');
}

module.exports = uiRouterSetup;
