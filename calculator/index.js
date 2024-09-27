let inputValue = "";

function display(value) {
  inputValue += value;
  document.getElementById("inputValue").value = inputValue;
}

function calculate() {
  try {
    inputValue = eval(inputValue).toString();
    document.getElementById("inputValue").value = inputValue;
  } catch (e) {
    document.getElementById("inputValue").value = "Error";
    inputValue = "";
  }
}

function clearInput() {
  inputValue = "";
  document.getElementById("inputValue").value = "";
}
