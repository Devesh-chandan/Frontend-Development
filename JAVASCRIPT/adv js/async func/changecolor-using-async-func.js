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
changeColor("red",1000)
.then(()=>{
    console.log("red color was changed");
    return changeColor("orange",1000);
})

.then(()=>{
    console.log("orange color was changed");
    return changeColor("green",1000);
})

.then(()=>{
    console.log("green color was changed");
    return changeColor("blue",1000);
})

.then(()=>{
    console.log("blue color was changed");
    return changeColor("pink",1000);
});


//after using await function in async function

async function demo(){
   await  changeColor("red",1000);
   await  changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
     await changeColor("pink",1000);
}
