const bill = document.getElementById("bill-input");
const person = document.getElementById("people-input");
const tipProcent = document.querySelectorAll(".btn");
const tipPerPerson = document.querySelector(".output-amount");
const totalPerPerson = document.querySelector(".output-total");
const customTipProcent = document.querySelector(".custom-btn");
const reset = document.querySelector(".reset");
let billAmount = 0;
let personNumber = 1;
let tip = 0.15;

tipProcent.forEach(procent => {
  procent.addEventListener("click", handleClick);
});

function handleClick(event) {
  tipProcent.forEach(function (procent) {
    procent.classList.remove("active-btn");

    if (event.target.innerHTML == procent.innerHTML) {
      procent.classList.add("active-btn");
      tip = Number(procent.textContent.replace(/%/, "")) / 100;
      calcTip();
    }
  });
}

bill.addEventListener("input", () => {
  billAmount = parseFloat(bill.value);
  calcTip();
});
person.addEventListener("input", () => {
  personNumber = parseFloat(person.value);
  calcTip();
});

function calcTip() {
  if (personNumber >= 1) {
    let tipAmount = (billAmount * tip) / personNumber;
    let total = billAmount / personNumber + tipAmount;
    tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
    document.querySelector("label[for = error]").classList.add("hidden");
  } else {
    document.querySelector("label[for = error]").classList.remove("hidden");
  }
}

customTipProcent.addEventListener("input", function () {
  tip = Number(customTipProcent.value) / 100;
  calcTip();
});

reset.addEventListener("click", () => {
  billAmount = 0;
  personNumber = 1;
  tip = 0.15;
  bill.value = "";
  person.value = "";
  calcTip();
});
