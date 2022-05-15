function make_tile(col,row,size,element){
    size = size + "px "
    var template_colums = "",template_rows = "";
    for(i=0;i<row;i++){
        template_rows=template_rows + size;

        for(j=0;j<col;j++){
        template_colums = template_colums + size;
        element.style.gridTemplateColumns = template_colums;
        tile = document.createElement("div") ;
        tile.setAttribute("class","tile");
        element.appendChild(tile);
        }
        tile.classList.add("tile2");
        template_colums = "";
        element.style.gridTemplateRows = template_rows;
    }
    TILES = document.getElementsByClassName("tile").length;
}

//przypisuje podany atrybut atri oraz jego nazwe name w miejscu pos
function appear(ele, name, atri, pos){
    if(atri === "class"){
        ele[pos].classList.add(name);
    }
    else{
        ele[pos].setAttribute(atri,name);
    }
}

function move_id(value){
    var POS = value;

    LAST_KEYS = LAST_KEYS.slice(0,2);
    //console.log(LAST_KEYS);
    document.querySelector("[id^='player']").removeAttribute("id");
    //zliczanie pozycji
    POSITION + POSITION.push(POS);
    MOVE_COUNT++;
    PLY_TILES = document.getElementsByClassName("tile");
    HEAD = PLY_TILES[POSITION[(POSITION.length-1)]];
    PLY_TILES[POSITION[0]].classList.remove("player_1","player_2","player_3_dl","player_3_dr","player_3_ul","player_3_ur");

    //ucina wektor o ostatnia wartosc
    POSITION = POSITION.slice(-LENGHT_OF_PLAYER);
    if(hasDuplicates(POSITION)){
        LOST();
     }
    //console.log("POS3 slice: "+POSITION);

    if (LAST_KEY === 37) { //left
        HEAD.setAttribute("id","player_l");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_2");
    }
    else if (LAST_KEY === 38) { //up
        HEAD.setAttribute("id","player_u");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_1");
    }
    else if (LAST_KEY === 39) { //right
        HEAD.setAttribute("id","player_r");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_2");
    }
    else if (LAST_KEY === 40) { //down
        HEAD.setAttribute("id","player_d");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_1");
    }


    if (LAST_KEYS[0] === 39 && LAST_KEYS[1] === 40) { // down-right
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_ur");
        //console.log("down-right");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 37 && LAST_KEYS[1] === 40){
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_ul");
        //console.log("down-left");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 39 && LAST_KEYS[1] === 38){ //up - right
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_dr");
        //console.log("up-right");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 37 && LAST_KEYS[1] === 38){
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_dl");
        //console.log("up-left");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 38 && LAST_KEYS[1] === 39) { // down-right
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_ul");
        //console.log("right-up");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 40 && LAST_KEYS[1] === 39){
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_dl");
        //console.log("right-down");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 38 && LAST_KEYS[1] === 37){ //up - right
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_ur");
        //console.log("left-up");
        //console.log(LAST_KEYS);
    }
    else if (LAST_KEYS[0] === 40 && LAST_KEYS[1] === 37){
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.remove("player_1","player_2");
        PLY_TILES[POSITION[(POSITION.length-2)]].classList.add("player_3_dr");
        //console.log("left-down");
        //console.log(LAST_KEYS);
    }
    LAST_KEYS[1] = LAST_KEYS[0];
}
function increment(){
    var END_OF_ROW = document.querySelector('[id^="player"].tile.tile2');
    if(LAST_KEY === 37){ // left
        POSITION_START = POSITION_START-1;
        if(POSITION_START < 0){POSITION_START = POSITION_START+ ROWS; }
        move_id(POSITION_START);
        get_apple();
    }
    else if(LAST_KEY === 38){ //up
        POSITION_START = POSITION_START-ROWS;
        if(POSITION_START < 0){POSITION_START = POSITION_START+ TILES; }
        move_id(POSITION_START);
        get_apple();
    }
    else if(LAST_KEY === 39){ //right
        POSITION_START = POSITION_START+1;
        //if(POSITION_START >= (COLUMNS*ROWS)){POSITION_START = 0; }
        if(END_OF_ROW){POSITION_START = POSITION_START- ROWS; }
        move_id(POSITION_START);
        get_apple();
    }
    else if(LAST_KEY === 40){ //down
        POSITION_START = POSITION_START+ROWS;
        if(POSITION_START >= TILES){POSITION_START = POSITION_START- TILES; }
        move_id(POSITION_START);
        get_apple();
    }
    TIME_SET=setTimeout(increment, Interval);
    console.log(TIME_SET);
}
function get_apple(){
    var GETAPPLE = document.querySelector("[id^='player'].tile.apple");
    var IN_PLAYER = document.querySelector('.tile.apple.player');
    if (GETAPPLE != null) {
        SCORE= SCORE+10;
        var NEW_RAND_POS = Math.floor(Math.random()*TILES);
        var loop =0;
        while(POSITION.includes(NEW_RAND_POS) && PLAYER_TILES < TILES || loop === 100){
            loop++;
            NEW_RAND_POS = Math.floor(Math.random()*TILES);
            if (IN_PLAYER != null) {
                console.log("Collision");
                console.log(NEW_RAND_POS);
                appear(document.getElementsByClassName("tile"),"player","class",NEW_RAND_POS);
            }
        }
        LENGHT_OF_PLAYER++;
        //GETAPPLE.classList.add("player");
        GETAPPLE.classList.remove("apple");
        if(PLAYER_TILES >= TILES){
            WIN();
            console.log("You Win!");
        }
        else{
            appear(document.getElementsByClassName("tile"),"apple","class",NEW_RAND_POS);
        }
      }
}

function SHOW(){
    var licznik = document.getElementById("licznik");
    var BOX = document.getElementById("box");
    PLAYER_TILES = BOX.querySelectorAll("div[class*='player'], div[id*='player']").length;

    licznik.innerHTML = "Score: " + SCORE +" tiles: "+ PLAYER_TILES + " Moves: "+ MOVE_COUNT;
}
setInterval(SHOW, 1);

function del(ID){
    var ele = document.getElementById(ID);
    if(ele === undefined){
    console.log("tak");
    }
    else{
        ele.remove();
    }
}
function WIN(){
        clearTimeout(TIME_SET);
        console.log(TIME_SET);
        var WINNER = document.createElement("div") ;
        WINNER.setAttribute("id","WIN")
        WINNER.innerHTML = "You Win! Score: "+(SCORE);
        document.body.appendChild(WINNER);
}
function LOST(){
        clearTimeout(TIME_SET);
        console.log(TIME_SET);
        var LOSER = document.createElement("div") ;
        LOSER.setAttribute("id","LOSE")
        LOSER.innerHTML = "You lost, Score: "+ SCORE;
        document.body.appendChild(LOSER);
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
function reset(){
    POSITION_START = Math.floor(((COLUMNS*ROWS)/2)+ Math.floor(ROWS/3));
    POSITION = get_array(POSITION_START,LENGHT_OF_PLAYER);
    MOVE_COUNT=0;
    LENGHT_OF_PLAYER = 3;
    LAST_KEYS = [39 ,39], LAST_KEY=39;
    SCORE = 0;
    Interval = 200;
    APPLE_POSITION = Math.floor(Math.random()*TILES);
    var tyles = document.querySelectorAll(".tile");

    for(i=0;i<tyles.length;i++){
            tyles[i].classList.remove("player_1","player_2","player_3_ul","player_3_ur","player_3_dl","player_3_dr",
            "apple");
            tyles[i].removeAttribute("id");
        }
    appear(document.getElementsByClassName("tile"),"player","id",POSITION_START);
        while (APPLE_POSITION === POSITION_START){
            APPLE_POSITION = Math.floor(Math.random()*TILES);
        }
        appear(document.getElementsByClassName("tile"),"apple","class",APPLE_POSITION);
}

function debug(){
    var END_OF_ROW = document.querySelector('[id^="player"].tile.tile2');
    if (LAST_KEY === 37) { //left
            POSITION_START = POSITION_START-1;
        if(POSITION_START < 0){POSITION_START = POSITION_START+ ROWS; }
            move_id(POSITION_START);
            get_apple();
    }
    if (LAST_KEY === 38) { //up
            POSITION_START = POSITION_START-10;
        if(POSITION_START < 0){POSITION_START = POSITION_START+ TILES; }
            move_id(POSITION_START);
            get_apple();
    }
    if (LAST_KEY === 39) { //right
            POSITION_START = POSITION_START+1;
        if(END_OF_ROW){POSITION_START = POSITION_START- ROWS; }
            move_id(POSITION_START);
            get_apple();
    }
    if (LAST_KEY === 40) { //down
            POSITION_START = POSITION_START+10;
        if(POSITION_START >= TILES){POSITION_START = POSITION_START- TILES; }
            move_id(POSITION_START);
            get_apple();
    }
}