// =====.  State ======
let odds = [];
let evens = [];
let bank = [];

/**
 * Adds the first number in the bank to the odds or evens array depending on whether it is odd or even.
 * @param {number} n - the number to add
 */
function sortNumber(n) {
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
  render();
}

/**
 * Moves the first number in the bank to the odds or evens array depending on whether it is odd or even.
 */
function moveNumber(n) {
  if (bank.length === 0) return;
  const n = bank.shift();
  sortNumber(n);
  render();
}

function OddEvenForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number to the bank
      <input name="number" type="number" />
    </label>
    <button class="buttons" id="addNum">Add number</button>
    <button class="buttons" id="sort1" >Sort 1</button>
    <button class="buttons" id="sortAll" >Sort All</button>
  `;
  // Add the event listener and take action for the respecitve button
  const $buttons = $form.querySelectorAll(".buttons");
  $buttons.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.textContent === "addNum") {
      const formData = new FormData($form);
      const n = parseInt(formData.get("number"));
      alert("Button clicked");
      alert("Add number button clicked");
      moveNumber(n);
    } else if (event.target.textContent === "sort1") {
      sortNumber();
    } else if (event.target.textContent === "sortAll") {
      while (bank.length > 0) {
        moveNumber();
      };
    };
    return $form;
    }

// function BankForm() {
//   const $bankform = document.createElement("p");
//   $bankform.innerHTML = `
//     <p>
//       Bank
//     </p>
//   `;
//   const bankHeading = document.createElement("h3");
//   bankHeading.textContent = "Bank";
//   document.body.appendChild(bankHeading);
//   // const $bankList = document.createElement("p");
//   // $bankList.textContent = `Bank: ${bank.join(", ")}`;
//   // $bankform.appendChild($bankList);
//   return $bankform;
// };

// === Render ===
// function render() {
//   const $app = document.querySelector("#app");
//   $app.innerHTML = `
//     <h1>Odds and Events</h1>
//     <OddEvenForm></OddEvenForm>
//     <main>
//       <body>
//         <h3>Bank</h3>
//         <input style="width: 98%;" value="${bank.join(", ")}" readonly />
//         <h3>Odds</h3>
//         <input style="width: 98%;" value="${odds.join(", ")}" readonly />
//         <h3>Evens</h3>
//         <input style="width: 98%;" value="${evens.join(", ")}" readonly />
//       </body>
//       <OddEvenForm></OddEvenForm>

//     </main>
//   `;
//   $app.querySelector("OddEvenForm").replaceWith(OddEvenForm());
//   $app.querySelector("BankForm").replaceWith(BankForm());
// }
// render();
