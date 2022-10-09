const billAmount = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const cashGivenField = document.querySelector(".cash-given-field");
const message = document.querySelector(".errorMsg");
const num_change = document.querySelectorAll(".numChange");
const deno = [1, 5, 10, 20, 100, 500, 2000];

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
      showMessage("Cash amount is less than the Bill, Please enter correct value");
    }
    else if (billAmount.value === cashGivenInput.value) {
      showMessage("No amount should be returned");
    }
    else{
      return_change(cashGivenInput.value - billAmount.value);
    }
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


function return_change(balance_amount) {

  for (let i = deno.length - 1; i > -1; i--) {
    let num_deno = Math.trunc(balance_amount / deno[i]);
    balance_amount %= deno[i];
    num_change[i].innerText = num_deno;
  }
}