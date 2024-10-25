const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerHTML =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  if (divider === "0") {
    result.innerHTML =
      "Division not performed. Invalid number provided. Try again.";
    console.log("Call stack:", new Error().stack);
    return;
  }
  result.innerText = parseInt(dividend / divider);
});
