let arr=[1,2,3,4,6,11,22,9];
let maxel=arr.reduce((max,el)=>{
    if(max<el){
        return el;

    }else{
        return max;
    }
});
console.log(maxel);