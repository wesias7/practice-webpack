
var star = function(name, age){
    this.name = name ? name : '홍길동';
    this.age = age ? age : '29';
};
star.prototype.constructor = star;
star.prototype.blink = function(){
    console.log(this);
};
star.bind(star);

module.exports = star;