let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(...arr);
let name=["devesh"];
console.log(...name);


//spread with array literals
let Arr=[1,2,3,4,5];
let newArr=[...Arr];
let char=[..."hello"];
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let com=[...odd,...even];

console.log(...com);

//spread with object literals
 const data={
    email:"abc@gmail.com",
    password:"abc123",

 }; 
 const dataCopy={
    ...data,
idnum:123,
date:"1/2/25",
};
console.log(data);
console.log(dataCopy);