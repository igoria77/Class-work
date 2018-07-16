//components
class Bird{
  //creates object
  constructor(){
    //this.top = 50;
    this.top = Math.round( 500 * Math.random());
    this.left = Math.round( 500 * Math.random());
    this.color = 'red';
  }
  //render to html

  render(){
    //var div = document.createElement('div');
    this.div = document.createElement('div');
    this.div.setAttribute('class',`bird ${this.color}`);
document.body.firstElementChild.appendChild( this.div);
//position. left, top  HW допилить
  }
}
///////////test
 var b = new Bird();
 b.render();
