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
        })
        .state('newUser', {
            url: '/users/signup',
            template: '<users-new></users-new>'
        })
        .state('login', {
            url: '/users/login',
            template: '<user-login></user-login>'
        })
        .state('editUser', {
            url: '/users/edit/:userId',
            template: '<users-edit-component></users-edit-component>'
        })
        .state('showUser', {
            url: '/users/:userId',
            template: ''
            // template: '<users-show-component></users-show-component>'
        })
        .state('newReview', {
            url: '/reviews/new',
            template: '<reviews-new></reviews-new>'
        })
        ;


    $urlRouterProvider.otherwise('/');
}

module.exports = uiRouterSetup;
