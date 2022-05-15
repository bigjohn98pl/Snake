function get_array(pos,length){
    var array = [pos];
    for(i=1;i<=length-1;i++){
        array + array.unshift(pos-i);
    }
    return array;
}

var LENGHT_OF_PLAYER=5;
var BODY;
var HEAD;
var COLUMNS =10;
var ROWS = 10;
var POSITION_START = Math.floor(((COLUMNS*ROWS)/2)+ Math.floor(ROWS/3));
var APPLE_POSITION = Math.floor(Math.random()*(COLUMNS*ROWS));
var MOVE_COUNT=1;
var LENGHT_OF_PLAYER=3;
var POSITION = get_array(POSITION_START,LENGHT_OF_PLAYER);
var TILES,PLAYER_TILES,PLY_TILES;
var SCORE=0;
var Interval=1000;
var TIME_SET;
var LAST_KEYS = [39 ,39], LAST_KEY=39;

window.onload = function () {

    BOX = document.getElementById("box");
    make_tile(ROWS,COLUMNS,50,BOX);
    appear(document.getElementsByClassName("tile"),"player","id",POSITION_START);
    for(i=0;i<=POSITION.length-2;i++){
        appear(document.getElementsByClassName("tile"),"player_2","class",POSITION[i]);
    }
    while (APPLE_POSITION === POSITION_START){
        APPLE_POSITION = Math.floor(Math.random()*(COLUMNS*ROWS));
    }
    appear(document.getElementsByClassName("tile"),"apple","class",APPLE_POSITION);
    console.log(POSITION);
    document.addEventListener("keydown", function(event) {
          if (event.keyCode === 37) { //left
            LAST_KEYS.unshift(37);
            if(LAST_KEYS[0]===37 && LAST_KEYS[1]===39 || LAST_KEYS[0]===39 && LAST_KEYS[1]===37 || LAST_KEYS[0]===38
                            && LAST_KEYS[1]===40 || LAST_KEYS[0]===40 && LAST_KEYS[1]===38){
                LAST_KEY = LAST_KEYS[1];
                LAST_KEYS[0] = LAST_KEY;
            }
            else{LAST_KEY = 37;}
            //debug();
            }
          else if (event.keyCode === 38) { //up
            LAST_KEYS.unshift(38);
            if(LAST_KEYS[0]===37 && LAST_KEYS[1]===39 || LAST_KEYS[0]===39 && LAST_KEYS[1]===37 || LAST_KEYS[0]===38
                            && LAST_KEYS[1]===40 || LAST_KEYS[0]===40 && LAST_KEYS[1]===38){
                LAST_KEY = LAST_KEYS[1];
                LAST_KEYS[0] = LAST_KEY;
            }
            else{LAST_KEY = 38;}
            //debug();
            }
          else if (event.keyCode === 39) { //right
            LAST_KEYS.unshift(39);
            if(LAST_KEYS[0]===37 && LAST_KEYS[1]===39 || LAST_KEYS[0]===39 && LAST_KEYS[1]===37 || LAST_KEYS[0]===38
                            && LAST_KEYS[1]===40 || LAST_KEYS[0]===40 && LAST_KEYS[1]===38){
                LAST_KEY = LAST_KEYS[1];
                LAST_KEYS[0] = LAST_KEY;
            }
            else{LAST_KEY = 39;}
            //debug();
            }
          else if (event.keyCode === 40) { //down
            LAST_KEYS.unshift(40);
            if(LAST_KEYS[0]===37 && LAST_KEYS[1]===39 || LAST_KEYS[0]===39 && LAST_KEYS[1]===37 || LAST_KEYS[0]===38
                            && LAST_KEYS[1]===40 || LAST_KEYS[0]===40 && LAST_KEYS[1]===38){
                LAST_KEY = LAST_KEYS[1];
                LAST_KEYS[0] = LAST_KEY;
            }
            else{LAST_KEY = 40;}
            //debug();
            }
          });
}


		





