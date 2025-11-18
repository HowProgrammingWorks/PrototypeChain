'use strict';

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function () {
  return JSON.stringify(this);
};

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}

// #1 New-based inheritance
Square.prototype = new Rect();
Square.prototype.constructor = Square;

// #2 Object.create
// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

// #3 Manual __proto__ assignment
// Square.prototype.__proto__ = Rect.prototype;

// #4 With Object.setPrototypeOf
// Object.setPrototypeOf(Square.prototype, Rect.prototype);

// #5 Node.js way
// const util = require('util');
// util.inherits(Square, Rect);

Square.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

const square = new Square(20, 30, 10);
square.move(2, 3);

console.log({ square });
console.log({ Square });
console.log({ Rect });

console.log(square.__proto__ === Square.prototype);
console.log(square.__proto__.constructor === Square);
console.log(square.__proto__.__proto__ === Rect.prototype);
console.log(Square.__proto__ === Function.prototype);
console.log(Square.__proto__.constructor === Function);
console.log(Square.prototype.__proto__ === Rect.prototype);
console.log(Square.prototype.constructor === Square);
