// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="spiderman_img.png";
//     console,log("img changes");

// }
// console.dir(document.querySelector("#desciption"));

// let para1=document.createElement('p');
// para1.innerText="hey i am red";
// document.querySelector('body').append(para1);
// para1.classList.add("red");
// let h3=document.createElement('h3');
// h3.innerText="hey i am blue h3";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");
// let div=document.createElement('div');
// let h1=document.createElement('h1');
// let para2=document.createElement('para2');
// document.querySelector('body').append(div);
// div.classList.add("box");
// h1.innerText="hey i am inner element";
// para2.innerText="hey i am inner element";
// div.append(h1);
// div.append(para2);
let btns=document.querySelectorAll("button");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("btn was clicked");
//     alert("btn was clicked");
// }
for (btn of btns){
    // btn.onmouseenter= function(){
    // console.log("YOU ENTERED THE MOUSE");
    btn.addEventListener("click",sayHello);
     btn.addEventListener("click",sayName);

} ; function sayHello(){
    alert("hello!");
}
function sayName(){
    alert("Devesh!");
}

 



