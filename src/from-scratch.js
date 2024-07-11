class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2);
  }

  /* the constructor can be inherited too as long as the signature 
  doesn't need changing */

  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(side1) {
    super(side1, side1);
  }
  getDiagonal() {
    return Math.sqrt((this.side1 * this.side1) * 2);
  }
}

/* Be creative with this one! */
class Person {
  #passwords = [];

  constructor(whatFor, email) {
    this.whatFor = whatFor;
    this.email = email;
    this.#passwords;
  }

  setPassword(newPassword) {
    this.#passwords = newPassword;
  }

  list() {

  }

  find() {

  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
