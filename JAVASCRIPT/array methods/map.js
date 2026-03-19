let num=[1,2,3,4,5];
let double=num.map((el)=>{
    return el*2;
    
});
console.log(double);

let arr1=[{
    name:"devesh",
    roll:22216,
    marks:99,
},
{
    name:"rahul",
    roll:22289,
    marks:98,
}]
let gpa=arr1.map((el)=>{
    return el.marks/10;
})
console.log(gpa);