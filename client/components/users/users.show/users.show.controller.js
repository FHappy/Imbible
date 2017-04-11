// UsersShowController.$inject = ['$stateParams', 'UsersService'];
//
// function UsersShowController($stateParams, UsersService) {
//
//   const vm = this;
//
//   vm.current = {};
//   vm.loadCurrentUser = loadCurrentUser;
//
//
//   activate();
//
//   function activate() {
//   	loadCurrentUser();
//   }
//
//
//   function loadCurrentUser() {
//   	console.log($stateParams);
//   	UserService
//   	 .loadCurrent($stateParams.userId)
//   	 .then(function resolve(response) {
//   	 	vm.current = response.data.user;
//   	 });
//   }
// }
//   module.exports = UsersShowController;
