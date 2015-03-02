/**
 * Created by sonia.brahmi on 15-03-01.
 */
function Bezier(context, startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY){
    this.context = context;
    this.startX = startX;
    this.startY = startY;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.endX = endX;
    this.endY = endY;
    this.counter = 0;
    this.speed = speed;
}

Bezier.prototype.draw = function(){

};