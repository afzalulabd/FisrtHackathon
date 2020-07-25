var main=document.createElement('div');
main.setAttribute("id","grad");
main.classList.add('home_container');

document.body.append(main);


var game_title=document.createElement('div');
game_title.classList.add('gametitle');
game_title.innerHTML='SEQUENCE  FINDER';

main.append(game_title);

var x = document.createElement("BUTTON");
var t = document.createTextNode("Click me");
x.appendChild(t);

game_title.appendChild('x');











