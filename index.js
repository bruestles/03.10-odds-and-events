// =====.  State ======
let odds = [];
let evens = [];
let bank = [];

/**
 * Adds the first number in the bank to the odds or evens array depending on whether it is odd or even.
 * @param {number} n - the number to add
 */
function sortNumber() {
  n = bank.shift();
  // bank = bank.filter((_, i) => i < bank.length);
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
  render();
}

function OddEvenForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number to the bank
      <input name="number" type="number" />
    </label>
    <button id="addNum">Add number</button>
    <button id="sort1" >Sort 1</button>
    <button id="sortAll" >Sort All</button>
  `;

  // Add the event listener and take action for the respecitve button
  const $buttons = $form.querySelectorAll("button");
  for (const $button of $buttons) {
    $button.addEventListener("click", (event) => {
      event.preventDefault();
      // Moves number to bank
      if ($button.id === "addNum") {
        const formData = new FormData($form);
        const n = parseInt(formData.get("number"));
        bank.push(n);
        console.log("bank after push:", bank);
        render();
      } // Sorts one number from bank to odds or evens
      else if ($button.id === "sort1") {
        sortNumber();
      } // Sorts all numbers from bank to odds or evens
      else if ($button.id === "sortAll") {
        while (bank.length > 0) {
          sortNumber();
        }
        bank = [];
      } else {
        alert("Something went wrong.");
      }
    });
  }
  return $form;
}

function NumbersToAdd(numbers) {
  const $numbersToAdd = document.createElement("span");

  // $numbersToAdd.textContent = `${numbers.join(", ")}`;
  $numbersToAdd.innerHTML = `${numbers.join(", ")}`;
  return $numbersToAdd;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <OddEvenForm></OddEvenForm>
      <h3>Bank</h3>
      <SortingForm id="Bank"></SortingForm>
      <h3>Odds</h3>
      <SortingForm id="Odds"></SortingForm>
      <h3>Evens</h3>
      <SortingForm id="Evens"></SortingForm>
  `;
  $app.querySelector("OddEvenForm").replaceWith(OddEvenForm());
  $app.querySelector("SortingForm#Bank").replaceWith(NumbersToAdd(bank));
  $app.querySelector("SortingForm#Odds").replaceWith(NumbersToAdd(odds));
  $app.querySelector("SortingForm#Evens").replaceWith(NumbersToAdd(evens));
}

render();
