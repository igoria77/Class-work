class Mouse{
    constructor(canvas){
        this.icon_mouse = 'img/mouse.png';
        this.x = randCoord();
        this.y = randCoord();
        this.direction = 'up';
        this.canvas = canvas;
        this.who = 'mouse';
    }
    // render to canvas
    render(){

        // segments        
        var image = new Image();
            image.src = this.icon_mouse;
            var self = this;
            image.onload = function(){
                self.canvas.drawImage(image, self.x,self.y);
            }              
    }   

    //life cycle
    live(){
        var self = this;
        self.timer = setInterval(function(){ self.render(); },100);
    }    
    die(){
        clear.interval(this.timer);

    }
    //hw2  teleport(){
        //timeout,interval 20s, 30
        //hw3 placeMice(), placeBomb() -> if ()
    }
}