const User = require('./user.class');
const Admin = require('./admin.class');

const admin1 = new Admin("Tom", "Farr");
const user1 = new User("Jack", "Daniel's");


admin1.logIn();
user1.logIn();

console.log(admin1);
console.log(user1);