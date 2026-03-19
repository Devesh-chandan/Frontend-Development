async function greet(){
    return "hello";
}
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result);
})
.catch((err)=>{
    console.log("promise was rejected with err:",err);
});
//this as a asyn function 
let demo=async() =>{
    return 5;

};