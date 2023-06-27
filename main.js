let btnVerify = document.querySelector("#btn-verify");
let btnAgain = document.querySelector("#btn-again");

function randomNumber() {
  let random = 10 * Math.random();
  let numberValid = Math.round(random);
  if (numberValid < 0) {
    numberValid = 0;
  }
  return numberValid;
}

function changeScreen() {
  let screen01 = document.querySelector(".screen01");
  let screen02 = document.querySelector(".screen02");
  
  screen01.classList.toggle("hide");
  screen02.classList.toggle("hide");
}

function comparateNumber(num) {
  num = document.querySelector("#number");
  let numberValid = randomNumber();
  let txtValidate = document.querySelector("#txt-validate");
  let result = document.querySelector("#result");

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