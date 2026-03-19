let arr=[1,2,3,4,5];
function print(element){
    console.log(element);

}
arr.forEach(print);

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
arr1.forEach((student)=>{
    console.log(student);
    console.log(student.roll);
    console.log(student.marks);
    console.log(student.name);

});