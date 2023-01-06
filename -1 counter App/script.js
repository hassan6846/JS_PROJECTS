// const btn = document.querySelector(".btn");
// const value = document.querySelector(".value")
// let count = 1;

// btn.addEventListener("click", function() {
//   count++;
//   btn.textContent = count;
// });
const btn = document.querySelector(".btn");
const value = document.querySelector(".value")

// check if there is a value stored in localStorage for the key "count"
let count = localStorage.getItem("count") || 0;

// update the button text and the value element with the current count
btn.textContent = count;
value.textContent = count;

btn.addEventListener("click", function() {
  count++;
  btn.textContent = count;
  value.textContent = count;

  // store the new count in localStorage
  localStorage.setItem("count", count);
});