let nums=[1,2,3,4,5];
const square=nums.map((el)=>el*el);
console.log(square);
const sum=square.reduce((el,curr)=>el+curr,0);
console.log(sum);
let avg=sum/nums.length;
console.log(avg);