angular
    .module('imbibleApp')
    .service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
    const self = this;

    self.createUser = createUser;
    self.loadUser = loadUser;
    self.updateUser = updateUser;

    function createUser(user) {
        return $http.post('/api/users/', user);
    }

    function loadUser(userId) {
        return $http.get('/api/users/' + userId);
    }

    function editUser(user) {
        return $http.patch('/api/users/edit/' + user._id, user);
    }
}
