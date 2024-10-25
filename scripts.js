const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML =
      '<p style="font-size: 30px; color: red; text-align: center; margin-top:50vh; font-weight: bold;">Something critical went wrong. Please reload the page.</p>';
    console.error("Call stack:", new Error().stack);
    return;
  }

  if (!dividend || !divider) {
    result.innerHTML =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  if (divider === "0") {
    result.innerHTML =
      "Division not performed. Invalid number provided. Try again.";
    console.error("Call stack:", new Error().stack);
    return;
  }
  result.innerText = parseInt(dividend / divider);
});
