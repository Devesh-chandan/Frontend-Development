let arr=[10,20,30,41];
let num=10;
let res=arr.reduce((num,el)=>{
    if(el%10==0){
        return true;
    }else{
        return false;
    }
   
});
 console.log(res);


 //or
 let nums=[10,20,30];
 let result=nums.every((el)=>
el%10==0);
 console.log(result);

