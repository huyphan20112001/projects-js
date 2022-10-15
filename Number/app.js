const listNumber = document.querySelectorAll("article");
console.log(listNumber);

function updateCount(element) {
  const valueNumber = element.querySelector("span");
  console.log(valueNumber);
  console.log(valueNumber.dataset.value);
  const value = parseInt(valueNumber.dataset.value);
  const initCount = Math.ceil(value / 1000);
  let counter = 0;
  const countInterval = setInterval(() => {
    counter = counter + initCount;
    if (counter >= value) {
      valueNumber.textContent = value + "+";
      clearInterval(countInterval);
      return;
    } else {
      valueNumber.textContent = counter + "+";
    }
  }, 1);
}

listNumber.forEach((number) => {
  if (number) {
    // console.log(number)
    updateCount(number);
  }
});
