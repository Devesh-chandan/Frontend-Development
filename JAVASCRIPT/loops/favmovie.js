let  favmovie="kalki";
let guess=prompt("guess the movie");
while (guess !=favmovie){
    console.log("wrong guess");
    guess=prompt("");

if(guess==favmovie){
    console.log("right guess");
}
if(guess=='quit'){
    break;
}
}