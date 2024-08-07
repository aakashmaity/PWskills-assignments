
console.log("Inside js");
const tierInput = document.getElementById("tier");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
    console.log("button clicked");
    e.preventDefault();
});