angular
    .module('imbibleApp')
    .service('AuthenticationService', AuthenticationService);

AuthenticationService.$inject = ['$http', '$window'];

function AuthenticationService($http, $window) {

    const self = this;

    self.saveToken = saveToken;
    self.getToken = getToken;
    self.logout = logout;
    self.isLoggedIn = isLoggedIn;
    self.currentUser = currentUser;
    self.createUser = createUser;
    self.login = login;


    function saveToken(token) {
        $window.localStorage['cocktail-token'] = token;
    };

    function getToken() {
        return $window.loclaStorage['cocktail-token'];
    };

    function logout() {
        $window.localStorage.removeItem('cocktail-token');
    };

    function isLoggedIn() {
        var token = getToken();
        var payload;

        if (token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        } else {return false;}
    }

    function currentUser() {
        if (isLoggedIn()) {
            var token = getToken();
            var payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            return {
                email: payload.email,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName
            };
        }
    };
    //
    // function generatePayload() {
    //
    // }

    function createUser(user) {
        return $http.post('/api/users/', user)
            .then(function resolve(response) {
                // saveToken(response.token);
                saveToken(response.data.token);
            });
    };

    function login(user) {
        return $http.post('/api/users/login', user)
            .then(function resolve(response) {
                // saveToken(response.token);
                saveToken(response.data.token);
            });
    };
}
