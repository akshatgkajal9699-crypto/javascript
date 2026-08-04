// singleton
// const instaUser = new Object()
const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "jack"
instaUser.isLoggedIn = false
// console.log(instaUser);

const regularUser = {
    email : "akshat@gmial.com",
    fullname : {
        username:{
            firstname : "akshat",
            lastname : "gandhi"
        }
    }
}
// console.log(regularUser.fullname);
// merging of objects 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
//  course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);
