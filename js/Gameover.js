var gameoverpage=document.createElement('div');
        gameoverpage.classList.add('gameoverpage');
        document.body.append(gameoverpage);

        var gameovertitle=document.createElement('P');
        gameovertitle.innerHTML ="GAME OVER!!"
        gameovertitle.classList.add('buffertitle');
        gameoverpage.appendChild(gameovertitle);

        var gameovertitle2=document.createElement('P');
        gameovertitle2.innerHTML ="YOUR SCORE"
        gameovertitle2.classList.add('gameovertitle2');
        gameoverpage.appendChild(gameovertitle2);

        var finalscore=document.createElement('div');
        finalscore.setAttribute("id","finalscoreresult");
        finalscore.innerHTML=  localStorage.getItem("storageName");
        finalscore.classList.add('finalscore');
        gameoverpage.appendChild(finalscore);


        function nextpage(){

            window.location.replace("../index.html");
            }
            

        var playagain_button = document.createElement("BUTTON");
       var gamenode=document.createTextNode("Play Again");
       playagain_button.appendChild(gamenode);
       playagain_button.setAttribute("id","playagain_button")
       playagain_button.classList.add('playagain_button');
       playagain_button.setAttribute("onclick","nextpage()")
       gameoverpage.appendChild(playagain_button);


