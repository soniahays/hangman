
function Line(context, startX, startY, endX, endY){
    this.context = context;
    this.startX = startX;
    this.endX = endX;
    this.startY = startY;
    this.endY = endY;
    this.counter = 0;
}

Line.prototype.draw = function(startX, startY, endX, endY){
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.lineTo(endX, endY);
    this.context.stroke();
};

Line.prototype.animate = function(){
    var a = (this.endY - this.startY) / (this.endX - this.startX);
    var b = this.endY - a * this.endX;
    var x, y;

    if(this.startX !== this.endX){
        x = Math.min(this.endX, this.endX > this.startX ?  this.startX + this.counter : this.startX - this.counter);
        y = a * x + b;

    }else{
        x = this.startX;
        y = this.endY > this.startY ? this.startY + this.counter : this.startY - this.counter;
    }
    this.draw(this.startX, this.startY, x, y);
    this.counter++;
};