const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const targetValue = ((event) => {
  const inputValue = event.target.value.trim();
  outputRef.textContent = inputValue || "Anonymous";
});

inputRef.addEventListener("input", targetValue);

