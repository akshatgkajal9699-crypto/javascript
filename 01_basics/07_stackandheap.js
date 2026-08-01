// Stack = Primitive
// heap = non primitive

// stack
let myName="akshat";
let anotherName = myName;
anotherName = "jash";
// console.log(myName);
// console.log(anotherName);

// heap
let user1 = {
    emailId:"akshat@.com",
    age:"20"
}

let user2 = user1;
user2.emailId = "akshatgandhi@.com"
console.log(user1.emailId);
console.log(user2.emailId);

