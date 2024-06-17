const student = { name: 'John Doe', age: 20 };
Object.preventExtensions(student);

const extensibleStatus = Object.isExtensible(student);

const teacher = { subject: 'Math' };

Object.seal(teacher);

const sealedStatus = Object.isSealed(teacher);

console.log(`Extensible Status: ${extensibleStatus}`);
console.log(`Sealed Status: ${sealedStatus}`);
