/**
 * Created by sonia.brahmi on 15-03-01.
 */
function Arc(context, centerX, centerY, radius, startAngle, endAngle, direction, speed){
    this.context = context;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.direction = direction;
    this.counter = 0;
    this.speed = speed;

}

Arc.prototype.draw = function(centerX, centerY, radius, startAngle, endAngle, direction){
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, startAngle, endAngle, direction);
    this.context.stroke();
};

Arc.prototype.animate = function(){
    var angle = this.counter / 20;
    this.counter += this.speed;
    this.draw(this.centerX, this.centerY, this.radius, this.startAngle, angle, this.direction);

    return angle < this.endAngle;
};