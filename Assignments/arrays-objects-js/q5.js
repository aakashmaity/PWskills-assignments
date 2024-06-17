const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};

function displayStudentInfo(student) {
  for (const key in student) {
    const element = student[key];
    console.log("Property: ", key, ", ", "Value: ", element);
  }
}
displayStudentInfo(student);
