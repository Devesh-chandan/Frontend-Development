const sum=(a,b)=>{
    console.log(a+b);

};
sum(3,5);
const cube=(a)=>{
    console.log(a*a*a) ;

}
cube(3);
const pow=(a,b)=>{
    console.log(a**b);

}
pow(2,4);
//implicit return in arrow function
const mul=(a,b)=>(a*b);
console.log(mul(3,5));