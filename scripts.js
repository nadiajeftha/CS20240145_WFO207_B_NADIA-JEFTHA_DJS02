const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const dividendInputOnForm = document.getElementById("dividend");
const dividerInputOnForm = document.getElementById("divider");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = parseInt(dividend / divider);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!divider || !dividend) {
    alert "Division not performed.Both values are required in inputs.Try again.";
    return
  }
});
