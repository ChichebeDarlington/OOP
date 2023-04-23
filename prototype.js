function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "just logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "just logged in");
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "Super Mazi";
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email !== u.email;
  });
};

let user1 = new User("Mazi", "mazi@gmail.dev");
let user2 = new User("Okoro", "okoro@gmail.com");
let admin = new Admin("Adim", "admin@gmail.dev");
console.log(admin);
user1.login();

let users = [admin, user1, user2];
admin.deleteUser(user2);
console.log(users);
