function savetoDb(data){
    return new Promise((resolve,reject)=>{
    let internetspeed=Math.floor(Math.random() *10)+1;
    if(internetspeed>4){
        resolve("success the data was saved");
        
    }else{
        reject("failure:weak connection data not saved");
    }

    });
}
savetoDb("apna college")
.then(()=>{
    console,log("promise was resolved")
})
.catch(()=>{
console.log("promise was rejected");
})