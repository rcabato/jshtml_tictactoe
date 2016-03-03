//declares the nine boxes of the game
  var posstates = [0,0,0,0,0,0,0,0,0];
//declares the 3 images used in the game	
  var bimg = "./blank.jpg";
  var ximg = "./X.png";
  var oimg = "./O.jpg";
  var ma=[ bimg, ximg, oimg ];
  var playersymbol = ["X","O"]; 
  var x = "Player 1";
  var o = "Player 2";
  var playernames = [ x,o ];
  var currentplayer = 0;
//checks both wins for either X or O
  function checkwin() {									
    if (posstates[0]==posstates[1] && posstates[1]==posstates[2] && posstates[2]!=0||
        posstates[3]==posstates[4] && posstates[4]==posstates[5] && posstates[5]!=0||
        posstates[6]==posstates[7] && posstates[7]==posstates[8] && posstates[8]!=0||
        posstates[0]==posstates[3] && posstates[3]==posstates[6] && posstates[6]!=0||
        posstates[1]==posstates[4] && posstates[4]==posstates[7] && posstates[7]!=0||
        posstates[2]==posstates[5] && posstates[5]==posstates[8] && posstates[8]!=0||
        posstates[0]==posstates[4] && posstates[4]==posstates[8] && posstates[8]!=0||
        posstates[2]==posstates[4] && posstates[4]==posstates[6] && posstates[6]!=0){
	  dowin();	
	} else {
	  changeturn();
	  checktie();
	  }  
    }

  function dowin() {
    document.getElementById("playernames").innerHTML = playernames[currentplayer] + "&nbsp" + "Wins!!" + "&nbsp" + playernames[(currentplayer+    1) % 2] + "&nbsp" + "starts next game.";	
    var iab  = document.getElementById("imabutton")
    iab.className = "visible button";	
  }		
  function dotie() {

    document.getElementById("playernames").innerHTML = "YOU BOTH SUCK" + "&nbsp" + playernames[(currentplayer+1) % 2] + "&nbsp" + "starts next game.";
    var iab  = document.getElementById("imabutton")
    iab.className = "visible button";	

  }
  function cleargamestate() {
    var i = 0			
    for (test in posstates) {
      posstates[i] = 0;
      updateBoardAtPosition(i);
      i++;
    }
    var inb = document.getElementById("imabutton")
    inb.className = "notvisible button";
      changeturn();	
  }	
  function checktie() {
    if (posstates[0] != 0 && posstates[1] !=0 && posstates[2] != 0 && posstates[3] != 0 && posstates[4] != 0
        && posstates[5] != 0 &&	posstates[6] != 0 && posstates[7] != 0 && posstates[8] !=0) {
      dotie();	
    }
  }
  function processMove(pos) {
    var state = posstates[pos];
      if(state == 0){
        state = currentplayer + 1;
	posstates[pos] = state;
	updateBoardAtPosition(pos);
	checkwin();
    }	
  }	
  function updateBoardAtPosition(pos){
    var img = document.getElementById("myimage-" +pos);
    img.src = ma[posstates[pos]];
  }

  function changeturn() {				
    currentplayer++;    
    currentplayer = currentplayer % 2;
    document.getElementById("playernames").innerHTML = playernames[currentplayer] + "s Turn ("+playersymbol[currentplayer]+")";
  }


