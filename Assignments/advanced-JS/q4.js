class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}

function drawShape(shape) {
  shape.draw();
}

const circle = new Circle();
const rectangle = new Rectangle();

drawShape(circle); 
drawShape(rectangle); 
