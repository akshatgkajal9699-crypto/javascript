// singleton
// Object.create

// object literals

const mySym = "myKey1"
const JSuser = {
    name : "akshat",
    "full name": "akshat gandhi",
    [mySym] : "myKey1",
    age : 20,
    location : "mumbai",
    email : "akshat@gmail.com",
    isLoggedIn : false,
}
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);
// JSuser.email = "akshatgandhi@gmail.com"
// Object.freeze(JSuser)
// JSuser.email = "jashgandhi@gmail.com"
// console.log(JSuser);

JSuser.greeting = function() {
    console.log("hello js user");  
}

console.log(JSuser.greeting());
