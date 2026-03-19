let h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.styel.color=color;
        if(nextColorChange)nextColorChange();
    },delay);

}
changeColor("red",100,()=>{
    changeColor("orange",1000,()=>{
        changeColor("yellow",1000,()=>{
changeColor("black",1000,()=>{
    changeColor("pink",1000,()=>{});
});
        });
    });
});