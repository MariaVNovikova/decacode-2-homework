function User (firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.hasAccess = false;
        this.isLoggedIn = false;


    this.logIn = function(){
        if (this.hasAccess === true){this.isLoggedIn = true;};
    }

    this.logOut = function(){
        this.isLoggedIn = false;
    }
}

module.exports = User;
