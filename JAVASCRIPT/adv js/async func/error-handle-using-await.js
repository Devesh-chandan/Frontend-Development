function changeColor(color,delay){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`color changes to ${color}!`);
            resolve("color changed");

        },delay);
    });
}

async function demo(){
    try{
   await  changeColor("red",1000);
   await  changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
     await changeColor("pink",1000);
}catch(err){
    console.log("error caught");
    console.log(err);
}
let a=5;
console.log(a);
console.log("new number is",a+3);

}
