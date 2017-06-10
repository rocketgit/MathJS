 /* 
    Created by Nabok Studio 
  */
  
  "use strict";

  // Simple math functions
  function ceil(x) { return Math.ceil(x); };
  function round(x) { return Math.round(x); };
  function floor(x) { return Math.floor(x); };
  function sqrt(x) { return Math.sqrt(x); };
  function pow(x, y) { return Math.pow(x, y); };
  function abs(x) { return Math.abs(x); };
  function log(x) { return Math.log(x); };
  function exp(x) { return Math.exp(x); };
  function atan2(y, x) { return Math.atan2(y, x); };
  function norm(value, min, max) { return (value-min) * (max-min); };
  function lerp(norm, min, max) { return (max-min) * norm + min; };
  function map(value, srcMin, srcMax, destMin, destMax) { return lerp(norm(value, srcMin, srcMax), destMin, destMax); };
  function clapm(value, min, max) { return Math.min(Math.max(value, min), max); };
  function inRange(value, min, max) { return value >= min && values <= max; };
  function rangeIntersect(min0, max0, min1, max1) { return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1); };
  function distance(p0, p1) { return Math.sqrt((p1.x - p0.x) * (p1.x - p0.x) + (p1.y - p0.y) * (p1.y - p0.y)); };
  function distanceXY(x0, y0, x1, y1) { return Math.sqrt((x1-x0) * (x1-x0) + (y1-y0) * (y1-y0)); };
  // Base trigonometry functions
  function sin(x) { return Math.sin(x); };
  function cos(x) { return Math.cos(x); };
  function tan(x) { return Math.tan(x); };
  function cotan(x) { return 1/tan(x); };
  function acos(x) { return Math.acos(x); };
  function asin(x) { return Math.asin(x); };
  function atan(x) { return Math.atan(x); };
  // Random
  function choose() { return arguments[Math.floor(Math.random()*arguments.length)]; };
  function random(min, max) { return Math.floor(min + Math.random() * (max + 1 - min)); };
  // Collisions
  function circleCollision(c0, c1)                       // c0 and c1 are objects with x, y and radius parameters
  {
    return distance(c0, c1) <= c0.radius + c1.radius;
  };
  
  function pointInCircle(pointX, pointY, circle)         // pointX and pointY are points coordinates
  {                                                      // and the circle is an object with x, y and radius parameters
    return ditanceXY(pointX, pointY, circle.x, circle.y)
  };

  function rectCollision(r0, r1)                         // r0 and r1 are objects with x, y, width and height parameters
  {
    return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) && 
           rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height); 
  };

  function pointInRect(x, y, rect)                       // x and y are points coordinates
  {                                                      // and the rect is an object with x, y, width and height parameters
    return inRange(x, rect.x, rect.x + rect.width) &&
           inRange(y, rect.y, rect.y + rect.height);
  };

  function rectCircleCollision(circle, rect)            // circle and rect are object with x, y, radius (only for circle), 
  {                                                     // width and height (only for rect).
    var distX = abs(circle.x - rect.x-rect.width/2);
    var distY = abs(circle.y - rect.y-rect.height/2);

    if (distX > (rect.width/2 + circle.radius)) { return false; };
    if (distY > (rect.height/2 + circle.radius)) { return false; };

    if (distX <= (rect.width/2)) { return true; };
    if (distY <= (rect.height/2)) { return true; };

    var dx = distX-rect.width/2;
    var dy = distY-rect.height/2;
   
    return (dx*dx+dy*dy<=(circle.radius*circle.radius)); 
  };

 function lineIntersect(l1, l2) {                      // l1 and l2 are objects with x, y and toX, toY or X, Y or to.x, to.y
		let x1 = l1.x, y1 = l1.y, x2 = l1.toX || l1.to.x || l1.X, 
    y2 = l1.toY || l1.to.y || l1.Y, x3 = l2.x, y3 = l2.y,
    x4 = l2.to.x || l2.toX || l2.X, y4 = l2.to.y || l2.toY || l2.Y;

    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x) || isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        };
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        };
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        };
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        };
    };
    return true;
};
  
 function lineIntersectXY(x1, y1, x2, y2, x3, y3, x4, y4) {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        };
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        };
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        };
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        };
    };
    return true;
};
