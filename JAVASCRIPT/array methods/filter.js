let arr=[1,2,3,4,5,6,7,8,9,20,11,12,13];
let ans_even=arr.filter((el)=>{
    return el %2==0;
});
console.log(ans_even);

let ans_odd=arr.filter((el)=>{
    return el %2!=0;
});
console.log(ans_odd);
