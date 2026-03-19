console.log("hi there");
setTimeout( ()=>{
    console.log("apna college");},1000);
console.log("welcome to");
// setInterval( ()=>{
//     console.log("nice to meet you");},2000);

let id1=setInterval( ()=>{
    console.log("nice to meet you");
},2000);
console.log(id1);
clearInterval(id1);