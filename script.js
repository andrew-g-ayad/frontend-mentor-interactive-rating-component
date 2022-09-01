const choices = Array.from(document.getElementsByTagName("label"));
const myForm = document.getElementById("card");
const btnSubmit = document.getElementById("btn");
const rate = document.getElementById("rate");
const cardFeedback = document.getElementById("feedback");
const radio1 = document.getElementById("reviewChoice1");
const radio2 = document.getElementById("reviewChoice2");
const radio3 = document.getElementById("reviewChoice3");
const radio4 = document.getElementById("reviewChoice4");
const radio5 = document.getElementById("reviewChoice5");
const radios = [radio1, radio2, radio3, radio4, radio5];
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
