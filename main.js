const btnVerify = document.querySelector("#btn-verify");
const btnAgain = document.querySelector("#btn-again");

function randomNumber() {
  const random = 10 * Math.random();
  const numberValid = Math.round(random);
  if (numberValid < 0) {
    numberValid = 0;
  }
  return numberValid;
}

function changeScreen() {
  const screen01 = document.querySelector(".screen01");
  const screen02 = document.querySelector(".screen02");
  
  screen01.classList.toggle("hide");
  screen02.classList.toggle("hide");
}

function comparateNumber(num) {
  num = document.querySelector("#number");
  const numberValid = randomNumber();
  const txtValidate = document.querySelector("#txt-validate");
  const result = document.querySelector("#result");

  console.log(numberValid);

  if (!num.value || num.value < 0 || num.value > 10) {
    txtValidate.textContent = "*Digite um número válido";

  } else if(numberValid == num.value) {
    result.textContent = "Parabéns, você acertou!";
    changeScreen()

  } else {
    result.textContent = `Infelizmente você errou, o número era ${numberValid}!`;
    changeScreen()

  }
  num.value = "";
}

btnVerify.addEventListener("click", comparateNumber);
btnAgain.addEventListener("click", changeScreen);