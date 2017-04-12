function UsersEditController(UsersService) {
	var vm = this;

    var thePromise = UsersService.getUsers();

    //
    UsersService.getUsers
        thePromise.then(function (userslist) {
           vm.usersList = userslist;
        });



   vm.greeting =  "How about a drink, What will you have?";
   vm.message =  UsersService.message;
}
UsersEditController.$inject = ['UsersService'];

module.exports = UsersEditController;
