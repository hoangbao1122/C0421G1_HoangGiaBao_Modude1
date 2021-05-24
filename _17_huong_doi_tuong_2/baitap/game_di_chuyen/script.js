function Hero(image, top, left, size, speed ){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    this.getSpeed=function(){
        return this.speed;
    }
    this.setSpeed=function(newSpeed){
        this.speed = newSpeed;
    }
    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }
    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }
}
let hero = new Hero('pkm.jpg', 30, 30, 200, 200);
function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top == 30){
        hero.moveRight();
    }else if (hero.left >= window.innerWidth - hero.size && window.innerWidth - hero.size > hero.top) {
        hero.moveDown();
    }else if (hero.left>=30 && window.innerHeight- hero.size<= hero.top) {
        hero.moveLeft();
    }else{
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}
start();