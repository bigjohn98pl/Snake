var BODY;
var HEAD;
var COLUMNS =5;
var ROWS = 5;
var POSITION_START = Math.floor(Math.random()*(COLUMNS*ROWS));
var APPLE_POSITION = Math.floor(Math.random()*(COLUMNS*ROWS));
var MOVE_COUNT=0;
var POSITION = [];
var TILES,PLAYER_TILES;
var SCORE=0;
var Interval=1000;
var LAST_KEY = 39;
var LENGHT_OF_PLAYER=1;

window.onload = function () {

    BOX = document.getElementById("box");
    make_tile(ROWS,COLUMNS,1,BOX);

    appear(document.getElementsByClassName("tile"),"player","id",POSITION_START);
    while (APPLE_POSITION === POSITION_START){
        APPLE_POSITION = Math.floor(Math.random()*(COLUMNS*ROWS));
    }
    appear(document.getElementsByClassName("tile"),"apple","class",APPLE_POSITION);

    document.addEventListener("keydown", function(event) {
          if (event.keyCode === 37) { //left
            LAST_KEY=37;
            }
          else if (event.keyCode === 38) { //up
            LAST_KEY=38;
            }
          else if (event.keyCode === 39) { //right
            LAST_KEY=39;
            }
          else if (event.keyCode === 40) { //down
            LAST_KEY=40;
            }
          });
}


		





