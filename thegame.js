var BODY;
var PLAYER;
var COLUMNS =20;
var ROWS = 20;
var POSITION_START = Math.floor(Math.random()*(COLUMNS*ROWS));
var APPLE_POSITION = Math.floor(Math.random()*(COLUMNS*ROWS));
var MOVE_COUNT=0;
var POSITION = [];
var TILES;
var SCORE=0;
var Interval=100;
var LAST_KEY = 39;
var LENGHT_OF_PLAYER=1;
window.onload = function () {
    BOX = document.getElementById("box");
    make_tile(ROWS,COLUMNS,50,BOX);
    appear(document.getElementsByClassName("tile"),"player","id",POSITION_START);
    while (APPLE_POSITION === POSITION_START){
        APPLE_POSITION = Math.floor(Math.random()*(COLUMNS*ROWS));
    }
    appear(document.getElementsByClassName("tile"),"apple","class",APPLE_POSITION);
    document.addEventListener("keydown", function(event) {
          if (event.keyCode === 37) { //left
            LAST_KEY=37;
            //appear(document.getElementsByClassName("tile"),"player","id",POSITION_START);
            //document.querySelector("#player.tile").removeAttribute("id");
            //POSITION_START = POSITION_START- 1;
            //if(POSITION_START < 0){POSITION_START = POSITION_START+ ROWS; }
            //move_id(POSITION_START);
            //get_apple();
            }
          else if (event.keyCode === 38) { //up
            LAST_KEY=38;
            //POSITION_START = POSITION_START- ROWS;
            //if(POSITION_START < 0){POSITION_START = POSITION_START+ (COLUMNS*ROWS); }
            //move_id(POSITION_START);
            //get_apple();
            }
          else if (event.keyCode === 39) { //right
            LAST_KEY=39;
            //POSITION_START = POSITION_START+ 1;
            //if(POSITION_START >= (COLUMNS*ROWS)){POSITION_START = 0; }
            //move_id(POSITION_START);
            //get_apple();
            }
          else if (event.keyCode === 40) { //down
            LAST_KEY=40;
            //POSITION_START = POSITION_START+ ROWS;
            //if(POSITION_START >= (COLUMNS*ROWS)){POSITION_START = POSITION_START- (COLUMNS*ROWS); }
            //move_id(POSITION_START);
            //get_apple();
            }
          });
}


		





