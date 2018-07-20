
var shots = 0;
var kills = 0;
var b = new Bird();
    b.render();
    b.div.onclick = shoot; // привязка обработчика к объекту
    b.fly();

function shoot(){
    b.die();
    b = new Bird();
    b.render();
    b.fly();
    b.div.onclick = shoot;
    kills++;
    panel.innerHTML = '<h1> kills '+kills+'</h1>'
    b.die();
}
