const rangeBar = document.getElementById("rangeBar");
const display = document.getElementById("para");

rangeBar.addEventListener("input", function() {
  // Get the current minimum and maximum range values
 

  // Update the text display with the current range values
  const disp=display.innerHTML =  rangeBar.value;
  console.log(disp)
});
