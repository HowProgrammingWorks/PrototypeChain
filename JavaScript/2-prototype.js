'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function (obj) {
  const { x, y } = obj;
  return new Point(x, y);
};

Point.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function () {
  return `[${this.x}, ${this.y}]`;
};

const point = new Point(10, 20);
point.move(2, 3);

console.log({ point });
console.log({ Point });

console.log(point.__proto__ === Point.prototype);
console.log(point.__proto__.constructor === Point);
console.log(point.__proto__.__proto__ === Object.prototype);
console.log(Point.__proto__ === Function.prototype);
console.log(Point.__proto__.constructor === Function);
console.log(Point.prototype.__proto__ === Object.prototype);
console.log(Point.prototype.constructor === Point);
