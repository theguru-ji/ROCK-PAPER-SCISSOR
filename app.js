let choice=document.querySelectorAll(".choice");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let user=document.querySelector("#user");
let compt=document.querySelector("#comp");
var msgc=document.querySelector("#msg-container");
let comp="";
let uwon=0;
let cwon=0;
let ran=()=>{
let random=Math.random();
if(random<0.33){
comp="rock";
}
else if(random<0.66){
    comp="paper";
}
else{
    comp="scissor";
}
}    
choice.forEach((ch)=>{
      ch.addEventListener("click",()=>{
         ran();
      if(ch.id=="rock"){
        if(comp=="rock"){
            console.log("Draw");
            msg="No Winner";
            score();
            
        }
        else if(comp=="paper"){
            console.log("You lost, comp=paper");
            cwon++;
            msg="You Lost,Computer choose paper";
            score();
        }
        else{
            console.log("You won, comp=scissor");
            uwon++;
            msg="You Won,Computer choose Scissor";
            score();
        }
      }  
      else if(ch.id=="paper"){
        ran();
        if(comp=="rock"){
            console.log("you won.comp=rock");
            uwon++;
            msg="You Won,Computer choose Rock";
            score();
        }
        else if(comp=="paper"){
            console.log("draw");
            msg="No Winner";
            score();
        }
        else{
            console.log("You lost, comp=scissor");
            cwon++;
            msg="You Lost,Computer choose Scissor";
            score();
        }
      }  
      else{
        ran();
        if(comp=="rock"){
            console.log("you lost.comp=rock");
            cwon++;
             msg="You Lost,Computer choose Rock";
            score();
        }
        else if(comp=="paper"){
            console.log("you won,comp=paper");
            uwon++;
            msg="You Won,Computer choose Paper";
            score();
        }
        else{
            console.log("draw");
            msg="No Winner";
            score();
        }
      }  
    });
});
const score=()=>{
     
user.innerText=uwon;
compt.innerText=cwon;
msgc.innerHTML=msg;
}


