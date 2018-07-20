// COMPONENTS
class Bird{
  // creaza obiectul
  constructor(){
    this.top = Math.round( 500 * Math.random() );
    this.left = parseInt( (500-50) * Math.random() );
    this.color = 'red';
    this.speed = Math.round( Math.random()*4 + 1 );
  }
  // Afiseaza pasarea in html
  die(){
  this.div.classList.add('dying');
    var self = this;
    setTimeout(function(){
       self.div.parentElement.removeChild( self.div );
    },500);
  }
  render(){
    this.div = document.createElement('div');
    this.div.setAttribute('class', `bird ${this.color}` );
    document.body.firstElementChild.appendChild( this.div );
    // position. left, top

    this.div.style.top = `${this.top}px`;
    this.div.style.left = `${this.left}px`;
  }
    fly(){
    var self = this;
    setInterval(function(){
      if(self.left>(250 + Math.random()*100) || self.left<50){
        self.speed*=-1;
        if(Math.abs(self.speed) <8){
          self.speed*=1.5;
        }
      }
      self.left+= self.speed;
      self.div.style.top = `${self.top}px`;
      self.div.style.left = `${self.left}px`;

      //this.left++;
      console.log(self.left); //this ----!!! comtext
    }, 50);
  }
}
