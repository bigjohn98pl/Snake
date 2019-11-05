function make_tile(col,row,size,element){
    size = size + "fr "
    var template_colums = "",template_rows = "";
    for(i=0;i<row;i++){
        template_rows=template_rows + size;

        for(j=0;j<col;j++){
        template_colums = template_colums + size;
        element.style.gridTemplateColumns = template_colums;
        tile = document.createElement("div") ;
        tile.setAttribute("class","tile");
        //var tile_img = document.createElement("img") ;
        //tile_img.setAttribute("src","snake_img.jpg");
        //tile.appendChild(tile_img);
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
        //console.log(name +pos);
    }
    else{
        ele[pos].setAttribute(atri,name);
        //console.log(name +pos);
    }
}

function move_id(value){
    var POS = value;
    console.log("val " +value);
    document.querySelector("[id^='player']").removeAttribute("id");
    POSITION[MOVE_COUNT] + POSITION.push(POS);
    MOVE_COUNT++;
    //ply.classList.add("player");
    //ply.setAttribute("id","player");
    //ply.removeAttribute("id");
    var ply_tile = document.getElementsByClassName("tile");
    for(i=0;i<POSITION.length;i++){
        ply_tile[POSITION[i]].classList.remove("player");
        ply_tile[POSITION[i]].removeAttribute("id");
    }
    //console.log(POSITION);
    POSITION = POSITION.slice(-LENGHT_OF_PLAYER);
    if(hasDuplicates(POSITION)){
        LOST();
     }
    for(i=0;i<POSITION.length;i++){
        ply_tile[POSITION[i]].classList.add("player");
        HEAD = ply_tile[POSITION[POSITION.length-1]];
        if (LAST_KEY === 37) { //left
            HEAD.setAttribute("id","player_l");
            }
          else if (LAST_KEY === 38) { //up
            HEAD.setAttribute("id","player_u");
            }
          else if (LAST_KEY === 39) { //right
            HEAD.setAttribute("id","player_r");
            }
          else if (LAST_KEY === 40) { //down
            HEAD.setAttribute("id","player_d");
            }
    }
}
function increment(){
    var END_OF_ROW = document.querySelector('#player.tile.tile2');
    if(LAST_KEY===37){ // left
        POSITION_START = POSITION_START-1;
        if(POSITION_START < 0){POSITION_START = POSITION_START+ ROWS; }
        move_id(POSITION_START);
        get_apple();
    }
    else if(LAST_KEY===38){ //up
        POSITION_START = POSITION_START-ROWS;
        if(POSITION_START < 0){POSITION_START = POSITION_START+ TILES; }
        move_id(POSITION_START);
        get_apple();
    }
    else if(LAST_KEY===39){ //right
        POSITION_START = POSITION_START+1;
        //if(POSITION_START >= (COLUMNS*ROWS)){POSITION_START = 0; }
        if(END_OF_ROW){POSITION_START = POSITION_START- ROWS; }
        move_id(POSITION_START);
        get_apple();
    }
    else if(LAST_KEY===40){ //down
        POSITION_START = POSITION_START+ROWS;
        if(POSITION_START >= TILES){POSITION_START = POSITION_START- TILES; }
        move_id(POSITION_START);
        get_apple();
    }
    setTimeout(increment, Interval);
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
        GETAPPLE.classList.add("player");
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
    //var tiles = BOX.querySelectorAll(".tile:not(.player):not(#player)").length;
    PLAYER_TILES = BOX.querySelectorAll(".player, #player").length;
    licznik.innerHTML = "Score: " + SCORE +" tiles: "+ PLAYER_TILES + " Moves: "+ MOVE_COUNT;
}
setInterval(SHOW, 1);

function del(ID){
    var ele = document.getElementById(ID);
    ele.remove();
}
function WIN(){
        Interval = 60000
        var WINNER = document.createElement("div") ;
        WINNER.setAttribute("id","WIN")
        WINNER.innerHTML = "You Win! Score: "+(SCORE / MOVE_COUNT);
        document.body.appendChild(WINNER);
        //setTimeout(del("WIN"), 900);
}
function LOST(){
        Interval = 60000
        var LOSER = document.createElement("div") ;
        LOSER.setAttribute("id","LOSE")
        LOSER.innerHTML = "You lost, Score: "+ SCORE;
        document.body.appendChild(LOSER);
        //setTimeout(del("LOSE"), 900);
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
function reset(){
    POSITION=[];
    MOVE_COUNT=0;
    LENGHT_OF_PLAYER = 1;
    SCORE = 0;
    Interval = 500;
    POSITION_START = Math.floor(Math.random()*TILES);
    APPLE_POSITION = Math.floor(Math.random()*TILES);
    var tyles = document.getElementsByClassName("tile");
    for(i=0;i<tyles.length;i++){
            tyles[i].classList.remove("player");
            tyles[i].classList.remove("apple");
            tyles[i].removeAttribute("id");
        }
    appear(document.getElementsByClassName("tile"),"player","id",POSITION_START);
        while (APPLE_POSITION === POSITION_START){
            APPLE_POSITION = Math.floor(Math.random()*TILES);
        }
        appear(document.getElementsByClassName("tile"),"apple","class",APPLE_POSITION);
}