
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 40;
    console.log('ok: ' + this.left);
  }
  this.moveBotton = function () {
    this.top += 40;
    console.log(this.top);
  }

}

var hero = new Hero('pkm.jpg', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }if(hero.top < window.innerWidth - hero.size){
    hero.moveBotton();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 700)
}

start();