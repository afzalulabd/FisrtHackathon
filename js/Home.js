var main=document.createElement('div');
main.classList.add('flex-container');

document.body.append(main);

var x = document.createElement("IMG");
x.setAttribute("src", "./img/brain_running.png");
x.setAttribute("width", "80%");
x.setAttribute("height", "100%");
x.setAttribute("alt", "Sequence Finder");
x.classList.add('gameimage');
main.appendChild(x);

var game_box=document.createElement('div');
game_box.classList.add('game_box');
main.appendChild(game_box);

var gametitle=document.createElement('P');
gametitle.innerHTML ="SEQUENCE FINDER"
gametitle.classList.add('gametitle');
game_box.appendChild(gametitle);




















