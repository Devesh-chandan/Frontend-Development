let btn=document.querySelector("button");
let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";




//for cat facts;

// btn.addEventListener("click",async ()=>{
//     let facts=await  getfacts();
    
//     let p=document.querySelector("#result");
//     p.innerText=facts;
    
// });
// let url="https://catfact.ninja/fact";


// async function getfacts(){
//     try{
//     let res= await fetch(url);
//     let fact= await res.json()
//     console.log(data);
    
//     }
//     catch(e){
//         console.log("error -",e); 

//     }
// }
// async function getfacts(){
//     try{
//     let res= await axios.get(url);
    
//     return res.data.fact;
    
//     }
//     catch(e){
//         console.log("error -",e); 
//         return "no data was found"

//     }
// }

//for dog images;


btn.addEventListener("click",async ()=>{
    let link= await getImages();
    console.log(link); 
    let img=document.querySelector("#output");
    img.setAttribute("src",link);
    
});

async function getImages(){
    try{
    let res= await axios.get(url2);
    
    return res.data.message;
    
    }
    catch(e){
        console.log("error -",e); 
        return "no image was found"

    }
}


