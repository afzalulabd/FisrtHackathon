var bufferpage=document.createElement('div');
bufferpage.setAttribute("id","bufferpageid"); 
 bufferpage.classList.add('bufferpage');
document.body.append(bufferpage);


var buffertitle=document.createElement('P');
buffertitle.innerHTML ="GAME STARTS "
buffertitle.classList.add('buffertitle');
bufferpage.appendChild(buffertitle);


var loader=document.createElement('div');
loader.classList.add('loader');
bufferpage.appendChild(loader);

setTimeout(function(){
var buffertitle1=document.createElement('P');
buffertitle1.innerHTML ="GOOD LUCK!!! "
buffertitle1.classList.add('buffertitle');
bufferpage.appendChild(buffertitle1);

},2000);

setTimeout(function(){
    var myobj = document.getElementById("bufferpageid");
    myobj.remove();
},2300);

var arr_store_auto=[];
var arr_store_manual=[];
var count=0;var time=30000;


class sequence_finder{

    constructor(id){
        this.idvalue=id;
    }

    
     onSelect(idvalue){
        count++;
        arr_store_manual.push(idvalue);
        console.log("Onselect Auto :"+arr_store_auto.length);
        console.log("Onselect Manual :"+arr_store_manual.length)
if(arr_store_auto.length===count){
    this.onCompare();
}else{
    this.gameover(arr_store_auto.length); 
}
       
    
    }

    onCompare(){
        var flag=false;
        for (var i=0;i<arr_store_auto.length;i++){
        console.log("Random : "+arr_store_auto[i]+" Manual click :"+arr_store_manual[i])
            if(Number(arr_store_auto[i])===Number(arr_store_manual[i])){
                console.log("pass");
            }else{
                console.log("fail");
         flag=true;
         break;
            }
        }

        if(flag){
            this.gameover(arr_store_auto.length);   
        }else{
    var scorevalue=this.gamescore(arr_store_auto.length);
    document.getElementById("scorevalue").innerText=scorevalue;
    arr_store_manual=[];
    count=0;
    seq.blink();
}
    }
   
//    if(count%4==0){
// this.time=(this.time+10000);
//    }

//     setTimeout(
        
//         function(){
//         if((flag)&&(arr_store_auto.length!==count)){
//            this.gameover(arr_store_auto.length);
//         }else{
//               count=0;
//               seq.blink();
//         }},this.time);
        
    

     blink(){
       

        var rand=Math.floor(Math.random() * 4);
        arr_store_auto.push(rand+1);
        
        var f,color;
    if(rand===0){
         f = document.getElementById('1');
        color= f.style.backgroundColor;
    }else if(rand===1){
        f = document.getElementById('2');
        color= f.style.backgroundColor;
    }else if(rand===2){
        f = document.getElementById('3');
        color= f.style.backgroundColor;
    
    }else if(rand===3){
        f = document.getElementById('4');
        color= f.style.backgroundColor;
    
    }
        setTimeout(function(){
          clearInterval(settime);
          f.style.backgroundColor=color;
         },1000);
    
        var settime=setInterval(function() {
          f.setAttribute("style","background-color:white;")
        }, 200);

        //setTimeout(function(){if(count===0){seq.gameover(count);}},this.time*2);
        
    }

    gameover(randlen){
        var final= this.gamescore(randlen);
        localStorage.setItem("storageName",final);
        window.location.replace("../common./Gameover.html");

    }

    gamescore(randlen){
        var score=randlen*5;
        return score;
    }


}
let seq=new sequence_finder();

function playbutton_blink(){
     arr_store_auto=[];
     arr_store_manual=[];
     var time=10000;
    setTimeout(()=>{
        var f,color;
        f = document.getElementById('1');
        f.style.backgroundColor="greenyellow";
        f = document.getElementById('2');
        f.style.backgroundColor="blueviolet";
        f = document.getElementById('3');
        f.style.backgroundColor="orange";
        f = document.getElementById('4');
        f.style.backgroundColor="red";
    },1000);
    
    setTimeout( seq.blink(),1000);
   
}


setTimeout(function(){

var gameboard=document.createElement('div');
gameboard.classList.add('game-board');
document.body.append(gameboard);






var game_button = document.createElement("BUTTON");
    var gamenode=document.createTextNode("PLAY/RESET");
    game_button.appendChild(gamenode);
    game_button.setAttribute("id","Playbutton")
    game_button.classList.add('gamebutton');
    game_button.setAttribute("onclick","playbutton_blink()")
    gameboard.appendChild(game_button);

    var scoreboard=document.createElement('div');
    scoreboard.classList.add('scoreboard');
    gameboard.appendChild(scoreboard);

    var scorecard=document.createElement('SPAN');
    scorecard.innerHTML ="SCORE  :  "
    scorecard.classList.add('score');
    scoreboard.appendChild(scorecard);

    var score=document.createElement('SPAN');
    score.setAttribute("id","scorevalue");
    score.classList.add('scorevalue');
    scoreboard.appendChild(score);



var top_circle=document.createElement('div');
top_circle.setAttribute("style","top:40px;position:relative;");
gameboard.appendChild(top_circle);

var bottom_circle=document.createElement('div');
bottom_circle.setAttribute("style","top:40px;position:relative;");
gameboard.appendChild(bottom_circle);




var topleft=document.createElement('div');
topleft.setAttribute("id","1");
topleft.classList.add('top-left');
topleft.classList.add('quadrant');
console.log(this.id);
topleft.setAttribute("onclick","seq.onSelect(this.id)");

var one=document.createElement('SPAN');
one.textContent  ="1"
one.classList.add('textvalue');
topleft.appendChild(one);


var topright=document.createElement('div');
topright.setAttribute("id","2");
topright.classList.add('top-right');
topright.classList.add('quadrant');
console.log(this.id);
topright.setAttribute("onclick","seq.onSelect(this.id)");

var two=document.createElement('SPAN');
two.textContent  ="2"
two.classList.add('textvalue');
topright.appendChild(two);


top_circle.appendChild(topleft);
top_circle.appendChild(topright);


var bottomleft=document.createElement('div');
bottomleft.setAttribute("id","3");
bottomleft.classList.add('bottom-left');
bottomleft.classList.add('quadrant');
console.log(this.id)
bottomleft.setAttribute("onclick","seq.onSelect(this.id)");

var three=document.createElement('SPAN');
three.textContent  ="3"
three.classList.add('textvalue');
bottomleft.appendChild(three);

var bottomright=document.createElement('div');
bottomright.setAttribute("id","4");
bottomright.classList.add('bottom-right');
bottomright.classList.add('quadrant');
console.log(this.id);
bottomright.setAttribute("onclick","seq.onSelect(this.id)");

var fourth=document.createElement('SPAN');
fourth.textContent  ="4"
fourth.classList.add('textvalue');
bottomright.appendChild(fourth);

bottom_circle.appendChild(bottomleft);
bottom_circle.appendChild(bottomright);
    
    },3500);
    




