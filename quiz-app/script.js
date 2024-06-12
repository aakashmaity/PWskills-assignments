const options = document.querySelectorAll(".radioBtn")
const nextBtn = document.querySelector('.btn')
const question = document.getElementById('question')
const opt_A = document.getElementById('optionA')
const opt_B = document.getElementById('optionB')
const opt_C = document.getElementById('optionC')
const opt_D = document.getElementById('optionD')
const score = document.querySelector(".score")
const restartBtn = document.querySelector('.btn_restart')


// all questions 

const questions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		optiona: "&lt;javascript&gt",
		optionb: "&lt;js&gt",
		optionc: "&lt;scripting&gt",
		optiond: "&lt;script&gt",
		correctOption: "d"
	},
	{
		question: "Which statement is used to stop the execution of a loop in JavaScript?",
		optiona: "stop",
		optionb: "break",
		optionc: "exit",
		optiond: "halt",
		correctOption: "b"
	},
	{
		question: "Which function is used to display a dialog box with a specified message and an OK button in JavaScript?",
		optiona: "message()",
		optionb: "prompt()",
		optionc: "alert()",
		optiond: "confirm()",
		correctOption: "c"
	},
	{
		question: "What will be the output of the following code? var x = 5; console.log(x++);",
		optiona: "6",
		optionb: "5",
		optionc: "4",
		optiond: "Error",
		correctOption: "b"
	},
	{
		question: "What is the correct way to write a conditional statement in JavaScript?",
		optiona: "if condition {code block}",
		optionb: "if [condition] {code block}",
		optionc: "if {condition} {code block}",
		optiond: "if (condition) {code block}",
		correctOption: "d"
	},
	{
		question: "Which of the following is NOT a valid JavaScript data type?",
		optiona: "String",
		optionb: "Character",
		optionc: "Number",
		optiond: "Boolean",
		correctOption: "b"
	},
	{
		question: "What does the `===` operator do in JavaScript?",
		optiona: "Assigns a value to a variable.",
		optionb: "Checks for equality with type conversion.",
		optionc: "Checks for equality without type conversion.",
		optiond: "None of the above.",
		correctOption: "c"
	},
	{
		question: "What will be the output of the following code? console.log(typeof 42);",
		optiona: "42",
		optionb: "string",
		optionc: "number",
		optiond: "undefined",
		correctOption: "c"
	},
	{
		question: "Which keyword is used to declare variables in JavaScript?",
		optiona: "Var",
		optionb: "Let",
		optionc: "Const",
		optiond: "All the above",
		correctOption: "d"
	},
	{
		question: "What is JavaScript?",
		optiona: "A programming language used for creating dynamic content on webpages.",
		optionb: "A hardware component of a computer.",
		optionc: "A database management system.",
		optiond: "A programming language used for creating static content on webpages.",
		correctOption: "a"
	},
];

// load question on first window load 

window.onload = () => {
	nextQuestion()
}


let questionNumber = 1 //initial question number
let startingIndex = 0 //starting index of the question array
let current_score = 0 //current score
let flag = false //flag to check wheather the any of the option is selected or not

//add question and options to the UI
function nextQuestion() {
	question.innerHTML = questions[startingIndex].question
	opt_A.innerHTML = questions[startingIndex].optiona
	opt_B.innerHTML = questions[startingIndex].optionb
	opt_C.innerHTML = questions[startingIndex].optionc
	opt_D.innerHTML = questions[startingIndex].optiond
	score.innerHTML = current_score
}

//next button 
nextBtn.addEventListener('click', () => {

	//check if the all questions are attempted or not
	if (startingIndex + 1 === questions.length) {
		document.querySelector('.main-section').classList.toggle('none')
		document.querySelector('.quiz-over').classList.toggle('none')
		current_score = 0;
		console.log("completed");
	}

	//check if the option are selected or not 
	if (flag && startingIndex < questions.length) {
		startingIndex++
		flag = false
		nextQuestion()
	}

	//set radio button check to false, for the next question
	options.forEach(otherOption => {
		otherOption.disabled = false;
	});

	//count the current question number
	document.querySelector('.question-no').innerHTML = startingIndex + 1

	//remove the style property from each of the options
	options.forEach(option => {
		option.checked = false
		option.nextElementSibling.removeAttribute('style')
	})

	//add final score to the UI
	document.querySelector('.final_score').innerHTML = current_score
})


options.forEach(option => {
	option.addEventListener('input', () => {

		const correctOptionId = questions[startingIndex].correctOption

		//disable the user to select other options once he selected any of the option
		options.forEach(otherOption => {
			otherOption.disabled = true;
		});

		//check if the selected option is correct or not
		if (option.id === correctOptionId) {
			option.nextElementSibling.style.border = "2px solid green"
			option.nextElementSibling.style.boxShadow = "0 0 2px 2px green"
			current_score++
		} else {

			//if the selected option is not correct , add stlying according to it
			const correctOptionElement = document.getElementById(correctOptionId);
			correctOptionElement.nextElementSibling.style.border = "2px solid green";
			correctOptionElement.nextElementSibling.style.boxShadow = "0 0 2px 2px green";
		}
		flag = true
	})
})

//restarts the quiz
function restart() {
	startingIndex = 0
	document.querySelector('.main-section').classList.toggle('none')
	document.querySelector('.quiz-over').classList.toggle('none')
	nextQuestion()
}