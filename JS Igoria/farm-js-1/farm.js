//Legend
// 0 -land
// 1 - corn
// 2 - potato
// 3 - tomato
var farm_map = [0,0,0,1,1,2,0,0,0,0];
var farm_div = document.getElementById('farm');
function plantCorn(){
  farm_map[9] = 1;
  showMap();
}
function plantPoato(){
  farm_map[8] = 1;
  showMap();
}

function showMap(){
//удалене и обновление
  farm_div.innerHTML = '';
  for(var i=0;i<farm_map.length;i++){
    if( farm_map[i] == 1 ){
        farm_div.innerHTML += `<div class= "box corn"></div>`;
    } else if ( farm_map[i] == 2 ){
        farm_div.innerHTML += `<div class= "box potato"></div>`;
    } else {
    farm_div.innerHTML += `<div class= "box"></div>`;
    }
  }
}
showMap();
