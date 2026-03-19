let arr=[1,2,3,4,0];

let minel=arr.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});
console.log(minel);


//or
function getMIn(nums){
    let min=arr.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});
return min;

}
let num=[1,2,3,4,5,6,7,-1];
console.log(min);
