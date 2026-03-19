let greet="hello";
function changeGreeet(){
   let greet="namaste";    
   console.log(greet);
   function innergreet(){
    console.log(greet);

   }

    
}
console.log(greet);
changeGreeet();