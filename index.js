const billAmount = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const cashGivenField = document.querySelector(".cash-given-field");
const message = document.querySelector(".errorMsg");
const outputContainer = document.querySelector(".output");
const numChange = document.querySelectorAll(".numChange");

const denominations = [1, 5, 10, 20, 100, 500, 2000];

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideMessage() {
  message.style.display = "none";
}

function validateInputs() {
  let billValue = Number(billAmount.value);
  let cashValue = Number(cashGivenInput.value);
  hideMessage();
  if (billValue > 0 && cashValue > 0) {
    console.log(typeof billValue, cashValue);
    if (cashValue < billValue) {
      showMessage(
        "Cash amount is less than the Bill, Please enter correct value"
      );
    } else if (billValue === cashValue) {
      showMessage("No amount should be returned");
    } else {
      returnChange(cashValue - billValue);
      outputContainer.style.display = "block";
    }
  } else {
    showMessage("Invalid Bill Amount or Cash Given value!");
  }
}

nextButton.addEventListener("click", () => {
  let billValue = Number(billAmount.value);
  hideMessage();
  if (billValue > 0) {
    cashGivenField.style.display = "block";
    nextButton.style.display = "none";
  } else {
    showMessage("Enter Valid bill Amount");
  }
});

checkButton.addEventListener("click", validateInputs);

function returnChange(balanceAmount) {
  for (let i = denominations.length - 1; i > -1; i--) {
    let numberOfDenominations = Math.trunc(balanceAmount / denominations[i]);
    balanceAmount %= denominations[i];
    numChange[i].innerText = numberOfDenominations;
  }
}
