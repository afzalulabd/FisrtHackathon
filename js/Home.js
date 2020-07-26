var main=document.createElement('div');
main.classList.add('home_container');

document.body.append(main);


var game_box=document.createElement('div');
game_box.classList.add('game_box');
document.body.append(game_box);

var gametitle=document.createElement('P');
gametitle.innerHTML ="SEQUENCE FINDER"
gametitle.classList.add('gametitle');
game_box.appendChild(gametitle);


function nextpage(){

window.location.replace("./common/Game.html");
}

var game_button = document.createElement("BUTTON");
 var gamenode=document.createTextNode("Let's Play!");
 game_button.appendChild(gamenode);
 game_button.setAttribute("id","Playbutton")
 game_button.classList.add('gamebutton');
 game_button.setAttribute("onclick","nextpage()")
 game_box.appendChild(game_button);




















