const choices = Array.from(document.getElementsByTagName("label"));
const myForm = document.getElementById("card");
const btnSubmit = document.getElementById("btn");
const rate = document.getElementById("rate");
const cardFeedback = document.getElementById("feedback");
const radios = document.querySelectorAll(".radio");
let selectedValue = 0;
radios.forEach((radio, index) => {
  radio.addEventListener("change", (e) => {
    if (radio.checked) {
      selectedValue = index + 1;
      rate.innerText = selectedValue;
      choices.forEach((element) => {
        element.classList.remove("selected");
      });
      choices[index].classList.add("selected");
    }
  });
});

btnSubmit.addEventListener("click", () => {
  myForm.classList.add("hide");
  cardFeedback.classList.remove("hide");
  cardFeedback.classList.add("feedback");
});
