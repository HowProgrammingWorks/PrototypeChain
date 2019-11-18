'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static from(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

const point = new Point(0, 0);
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
