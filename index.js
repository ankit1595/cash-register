const billAmount = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const cashGivenField = document.querySelector(".cash-given-field");
const message = document.querySelector(".errorMsg");

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideMessage() {
  message.style.display = "none";
}

function validateInputs() {
  hideMessage();
  if (billAmount.value > 0 && cashGivenInput.value > 0) {
    if (cashGivenInput.value < billAmount.value) {
      showMessage("Cash amount is less than Bill, Please enter correct value");
    }
    if (billAmount.value === cashGivenInput.value) {
      showMessage("No amount should be returned");
    }
    console.log("billAmount", billAmount.value);
    console.log("cashGiven", cashGiven.value);
  } else {
    showMessage("Invalid Bill Amount or Cash Given value!");
  }
}

nextButton.addEventListener("click", () => {
  if (billAmount.value > 0) {
    cashGivenField.style.display = "block";
    nextButton.style.display = "none";
  } else {
    showMessage("Enter Valid bill Amount");
  }
});

checkButton.addEventListener("click", validateInputs);
