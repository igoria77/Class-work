//0-empty
//1-player
//2-coin
//3- bomb
//4- wall
//map[row][col]
// mario start coordinates
var mario_r = 8;
var mario_c = 8;
var money = 0;

var map = [
  [0,0,0,0,0,0,0,0,0,0],//0
  [0,0,0,0,3,0,0,0,0,0],//1
  [0,0,0,0,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,0,0,0,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0],//5
  [0,0,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,0,0,0],//7
  [0,0,0,0,2,0,0,0,1,0],//8
  [0,0,0,0,0,0,0,0,0,0],//9
  // 0,1,2,3,4,5,6,7,8,9
];

var div = document.getElementById('map');
var span = document.getElementById('money');

function move()
{
  if( event.keyCode==37 && mario_c > 0 )//left
  {
    if( map[mario_r][mario_c-1] == 2){
      money+=5;
    }
    map[mario_r][mario_c] = 0; //remove from curent position
    mario_c--;
    map[mario_r][mario_c] = 1; //set it on new coord
  }
  //console.log(event);//event ->global
  showMap();
}

function showMap(){
  div.innerHTML = ''; // remove old map
  for (var row = 0; row < 10; row++) {
    for (var col = 0; col < 10; col++) {
      //cosole.log( map[row][col] );
     if(map[row][col] == 0 ){
      div.innerHTML += '<div></div>';
    }
    else if(map[row][col]== 1 ){
      div.innerHTML += '<div class="player"></div>';
      }
    else if(map[row][col]== 2 ){
      div.innerHTML += '<div class="coin"></div>';
      }
    else if(map[row][col]== 3 ){
      div.innerHTML += '<div class="bomb"></div>';
      }
    else if(map[row][col]== 4 ){
      div.innerHTML += '<div class="wall"></div>';
      }
    }
  }
  span.innerHTML = money;
}

showMap();
