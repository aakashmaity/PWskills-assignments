const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

function addStudent(std) {
  students.push(std);
}

function updateStudent(idToUpdate) {
  for (std of students) {
    // console.log("std : ", std);
    if (std.id === idToUpdate) {
      std.grade = "C";
    }
  }
}
function deleteStudent(idToDelete) {
  const index = students.findIndex((student) => student.id === idToDelete);

  if (index !== -1) {
    students.splice(index, 1);
  }
}
function displayStudent(arr) {
  for (std of arr) {
    console.log(std);
  }
}

function findByGrade(gradeToFind) {
  let res = [];
  for (std of students) {
    if (std.grade === gradeToFind) {
      res.push(std);
    }
  }
  displayStudent(res);
}

function calculateAvgAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  console.log(totalAge / students.length);
}

addStudent({ id: 4, firstName: "Rik", lastName: "Das", age: 23, grade: "A",});
addStudent({ id: 5, firstName: "Debika", lastName: "Das", age: 21, grade: "C",});
updateStudent(3);
findByGrade("C");

console.log("------------------------------------------------")

deleteStudent(5);
displayStudent(students);

console.log("------------------------------------------------")

calculateAvgAge(students);
