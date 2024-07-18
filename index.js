function appendCharecter(charecter) {
  document.getElementById("display").value += charecter;
  document.body.style.backgroundColor = "lightblue";
}

function clearDisplay() {
  document.getElementById("display").value = "";
  document.body.style.backgroundColor = "lightcoral";
}
function clearEntry() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
  document.body.style.backgroundColor = "lightgreen";
}
function calculatorResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
