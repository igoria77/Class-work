var slides = [
  {
    title: "My firstslide",
    url: "http://steklokolor.ru/upload/iblock/2e4/40_400%D1%85300.jpg"
},
  {
    title: "The second one",
    url: "http://www.priroda.kiev.ua/wp-content/uploads/2017/02/lipa-melkolistnaja-tilia-cordata-1.jpg"
},
  {
    title: "The last",
    url: "https://g.io.ua/img_aa/large/0065/25/00652590.jpg"
}
];
//alert( slides[1].title )
function showSlide( index ) {
//  console.log ( slides[index] );
var div = document.body.children[0];
div.innerHTML += `
<div>
  <h2>${slides[index].title}</h2>
  <img src="${slides[index].url}">
</div>
`;
}
function showCarousel(){
  //clear
  var div = document.body.children[0];
  div.innerHTML = '';
  for( i=0; i<3; i++) {
    showSlide(i);
  }
}
function prev(){
  // push,pop, unshift,shift,
  slides.push(slides.shift());
  showCarousel();

}
function next(){
  slides.unshift (slides.pop());
  showCarousel();
}
////////////////////////////////
showCarousel();
