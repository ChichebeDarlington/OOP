// classes unlike traditional object does not use comma to separate members

class User {
  // create a constructor function
  constructor(name, email) {
    // properties in constructors
    this.name = name;
    this.email = email;
    this.scores = 1;
  }
  //   methods inside class
  login() {
    console.log(this.name, "just logged in");
    return this;
  }
  logout() {
    console.log(this.name, "just logged out");
    return this;
  }
  scoresUpadate() {
    console.log(this.name, "just scored", this.scores);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

const user1 = new User("Mazi", "mazi@gmail.dev");
const user2 = new User("Okoro", "okoro@gmail.com");
const admin = new Admin("Adim", "admin@gmail.dev");

// console.log(user1);
// console.log(user2);

// user1.login();
// user2.logout();
// user1.login().scoresUpadate().logout();
let users = [admin, user1, user2];
// admin.deleteUser(user1);
// user1.deleteUser(user1);

console.log(users);
