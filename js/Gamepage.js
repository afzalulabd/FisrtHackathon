var gameboard=document.createElement('div');
gameboard.classList.add('game-board');

document.body.append(gameboard);

var top_circle=document.createElement('div');
// top.classList.add('top');
gameboard.appendChild(top_circle);

var bottom_circle=document.createElement('div');
// bottom.classList.add('bottom');

gameboard.appendChild(bottom_circle);


var topleft=document.createElement('div');
topleft.classList.add('top-left');
topleft.classList.add('quadrant');

var topright=document.createElement('div');
topright.classList.add('top-right');
topright.classList.add('quadrant');


top_circle.appendChild(topleft);
top_circle.appendChild(topright);


var bottomleft=document.createElement('div');
bottomleft.classList.add('bottom-left');
bottomleft.classList.add('quadrant');

var bottomright=document.createElement('div');
bottomright.classList.add('bottom-right');
bottomright.classList.add('quadrant');

bottom_circle.appendChild(bottomleft);
bottom_circle.appendChild(bottomright);