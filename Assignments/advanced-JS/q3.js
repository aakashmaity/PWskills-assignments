function Calculator() {
  this.value = 0;

  this.add = function (number) {
    this.value += number;
    return this;
  };

  this.subtract = function (number) {
    this.value -= number;
    return this;
  };

  this.multiply = function (number) {
    this.value *= number;
    return this;
  };

  this.divide = function (number) {
    if (number !== 0) {
      this.value /= number;
      return this;
    } else {
      throw new Error("Cannot divide by zero");
    }
  };
}

const calc = new Calculator();
calc.add(10).subtract(3).multiply(5).divide(2);
console.log(calc.value);
