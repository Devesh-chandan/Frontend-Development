let str=["hi","hello","namaste"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result +=str[i];

    }
    return result;

}
console.log(str);
console.log(concat(str));