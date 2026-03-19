let todo=[];
let req=prompt("enter your request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("quittting");
        break;

    }
    if(req=="list"){
        
        for(tsk of todo){
            console.log(task);
        }
    
    }
    else if(req=="add"){
       let task= prompt("enter the task you want to add");
       todo.push(task);
       console.log("task added");
       
    }
    req=prompt("enter your request");

   
}