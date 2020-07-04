const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// select elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// event listener
btn.addEventListener("click", function() {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
