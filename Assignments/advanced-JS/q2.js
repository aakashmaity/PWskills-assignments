function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

function Employee(name, age, designation) {
  Person.call(this, name, age);
  this.designation = designation;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.getDetails = function () {
  console.log(
    "Name: " +
      this.name +
      ", Age: " +
      this.age +
      ", Designation: " +
      this.designation
  );
};

const employee1 = new Employee("Bob", 25, "Developer");
employee1.sayHello(); 
employee1.getDetails(); 