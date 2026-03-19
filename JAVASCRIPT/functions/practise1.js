let id1=setInterval( ()=>{
    console.log("hello world");
   

},2000);
setTimeout(()=>{
    clearInterval(id1);
    console.log("clear interval successfull")
},10000);