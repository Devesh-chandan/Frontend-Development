let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomcolor=getrandomcolor();
//     h3.innerText=randomcolor;
//     console.log( "color updated ");
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomcolor;
// });
// function getrandomcolor(){
//     let red= Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red}, ${green},${blue})`;
//     return color;
// }
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("key =" ,event.key);
    console.log("key =" ,event.code);
    
});