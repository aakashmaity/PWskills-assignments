function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
}

const person1 = new Person("Alice", 30);
person1.sayHello();
