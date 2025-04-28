// Array of math problems
const mathProblems = [
  { problem: "2x + 5 = 11", solution: "x = 3" },
  { problem: "x - 3 = 7", solution: "x = 10" },
  // Add more problems to the array
];

// Function to get the problem of the day
function getProblemOfTheDay() {
  const today = new Date().getDate();
  const problemIndex = today % mathProblems.length;
  return 
  mathProblems[problemIndex];
}

// Display the problem of the day
const problemOfTheDay = getProblemOfTheDay();
document.getElementById("problem-statement").innerHTML = problemOfTheDay.problem;
console.log("Problem of the day:", problemOfTheDay);

// Handle solution submission
document.getElementById("submit-solution").addEventListener("click", function() {
  const userSolution = prompt("Enter your solution:");
  if (userSolution === problemOfTheDay.solution) {
    document.getElementById("solution-feedback").innerHTML = "Correct!";
  } else {
    document.getElementById("solution-feedback").innerHTML = "Try again!";
  }
});
