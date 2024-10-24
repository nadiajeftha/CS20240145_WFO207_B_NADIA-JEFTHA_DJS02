const form = document.querySelector("[data-form]"); //dividend & divider
const result = document.querySelector("[data-result]"); //output message

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = parseInt(dividend / divider);
});

if (!dividend) {
  return "Division not performed. Both values are required in inputs. Try again.";
}
