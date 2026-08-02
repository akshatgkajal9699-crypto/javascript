// arrays

const myArr = [1,2,3,6]
// console.log(myArr(0)); 
// const myHeros = ["ironman","spiderman",thor]
// console.log(myHeros);
const myArr2 = new Array(9,2,4,5,6)
// console.log(myArr2[0]);

// methods
 myArr.push(10)
 console.log(myArr);
// console.log(myArr.includes(88));
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice and spluce
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);



