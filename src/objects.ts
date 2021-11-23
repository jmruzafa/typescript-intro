var realUser = {
    email: "me@me.com",
    firstName: 'Javier',
    lastName: 'Ruzafa',
    sayHi(){
        return "Hey there!, " + this.firstName;
    }
}

console.log(realUser.email);
console.log(realUser.firstName);
console.log(realUser.lastName);
console.log(realUser.sayHi());