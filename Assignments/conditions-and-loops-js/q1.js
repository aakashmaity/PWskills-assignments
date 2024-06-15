// Conditional statements in JavaScript are used to make decisions in your code based on evaluating conditions. 
// These conditions determine which block of code gets executed. There are primarily three types of conditional 
// statements in JavaScript: if statement, if...else statement, and if...else if...else statement.

// syntex: 
// if (condition1) {
//     // code block to be executed if condition1 is true
// } else if (condition2) {
//     // code block to be executed if condition2 is true
// } else {
//     // code block to be executed if all conditions are false
// }

let hour = 10;

if (hour < 12) {
    console.log("Good morning!"); 
} else if (hour < 18) {
    console.log("Good afternoon!"); 
} else {
    console.log("Good evening!");
}

