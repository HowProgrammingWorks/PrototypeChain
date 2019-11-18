'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

const square = new Square(20, 30, 10);
square.move(2, 3);

console.log({ square });
console.log({ Square });
console.log({ Rect });

console.log(square.__proto__ === Square.prototype);
console.log(square.__proto__.constructor === Square);
console.log(square.__proto__.__proto__ === Rect.prototype);
console.log(Square.__proto__ === Function.prototype);
console.log(Square.__proto__ === Rect);
console.log(Square.__proto__.constructor === Function);
console.log(Square.prototype.__proto__ === Rect.prototype);
console.log(Square.prototype.constructor === Square);
console.log(Rect.__proto__ === Function.prototype);
